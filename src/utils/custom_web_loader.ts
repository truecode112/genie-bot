import type { CheerioAPI, load as LoadT } from 'cheerio';
import { Document } from 'langchain/document';
import { BaseDocumentLoader } from 'langchain/document_loaders';
import type { DocumentLoader } from 'langchain/document_loaders';

export class CustomWebLoader
  extends BaseDocumentLoader
  implements DocumentLoader
{
  constructor(public webPath: string) {
    super();
  }

  static async _scrape(url: string): Promise<CheerioAPI> {
    const { load } = await CustomWebLoader.imports();
    const response = await fetch(url);
    const html = await response.text();
    return load(html);
  }

  async scrape(): Promise<CheerioAPI> {
    return CustomWebLoader._scrape(this.webPath);
  }

  async load(): Promise<Document[]> {
    console.log('Loading data from', this.webPath);

    const $ = await this.scrape();

    // Remove unwanted HTML tags and attributes
    $(
      'script, style, link, meta, noscript, iframe, img, video, audio, source, object, embed, applet, base, area, map, param, form, input, textarea, select, option, button, label, fieldset, legend, datalist, output, progress, meter, canvas, details, summary, menu, menuitem, dialog, script',
    ).remove();
    $('*')
      .removeAttr('class')
      .removeAttr('id')
      .removeAttr('style')
      .removeAttr('width')
      .removeAttr('height')
      .removeAttr('border')
      .removeAttr('cellspacing')
      .removeAttr('cellpadding')
      .removeAttr('bgcolor')
      .removeAttr('background')
      .removeAttr('align')
      .removeAttr('valign')
      .removeAttr('frame')
      .removeAttr('frameborder')
      .removeAttr('marginwidth')
      .removeAttr('marginheight')
      .removeAttr('hspace')
      .removeAttr('vspace')
      .removeAttr('nowrap')
      .removeAttr('nowrap');

    // Extract titles
    const titleTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    const titles = titleTags
      .map((tag) =>
        $(tag)
          .map((_, el) => $(el).text().trim())
          .get(),
      )
      .flat();

    // Extract main content
    const contentTags = ['p', 'ul', 'li'];
    const mainContent = contentTags
      .map((tag) =>
        $(tag)
          .map((_, el) => {
            const text = $(el).text().trim();
            const hrefs = $(el)
              .find('a')
              .map((_, a) => $(a).attr('href'))
              .get();
            if (hrefs.length > 0) {
              return `${text} (${hrefs.join(', ')})`;
            }
            return text;
          })
          .get(),
      )
      .flat();

    // Combine titles and main content
    const cleanedContent = [...titles, ...mainContent].join(' ');
    const contentLength = cleanedContent?.match(/\b\w+\b/g)?.length ?? 0;

    const metadata = {
      source: this.webPath,
      titles,
      mainContent,
      contentLength,
    };

    return [new Document({ pageContent: cleanedContent, metadata })];
  }

  static async imports(): Promise<{
    load: typeof LoadT;
  }> {
    try {
      const { load } = await import('cheerio');
      return { load };
    } catch (e) {
      console.error(e);
      throw new Error(
        'Please install cheerio as a dependency with, e.g. `yarn add cheerio`',
      );
    }
  }
}