import { Document } from 'langchain/document';
//import * as fs from 'fs/promises';
import { CustomWebLoader } from '../utils/custom_web_loader';
// import type { SupabaseClient } from '@supabase/supabase-js';
import { Embeddings, OpenAIEmbeddings } from 'langchain/embeddings';
import { SupabaseVectorStore } from 'langchain/vectorstores';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import supabase from '../utils/supabase_client';
import { PineconeClient } from '@pinecone-database/pinecone';
import { PineconeStore } from 'langchain/vectorstores';


const scraperApiEndpoint = 'https://wk5oixw36k.execute-api.eu-central-1.amazonaws.com/default/ingestgpt-chromium';


async function fetchSubUrls(url) {
  try {
    const response = await fetch(scraperApiEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ baseUrl: url, maxVisits: 2 }),
    });
    const data = await response.json();
    console.log('AWS: ',data);
    return data;
  } catch (error) {
    console.error(`Error while fetching sub-URLs from ${url}: ${error}`);
    return [];
  }
}


async function extractDataFromUrl(url) {
  try {
    const startTime = Date.now();

    // Use CustomWebLoader to extract documents
    const loader = new CustomWebLoader(url);
    const docs = await loader.load();
    //console.log(`Documents extracted from ${url}:`, docs);

    // Save documents to Supabase
    await supabase
      .from('documents')
      .insert(docs.map((doc) => ({ url, ...doc })));

    // Use Puppeteer to extract sub-URLs
    const subUrls = await fetchSubUrls(url);
    console.log(`Sub-URLs extracted from ${url}:`, subUrls);


    const endTime = Date.now();
    console.log(`Time taken by extractDataFromUrl: ${endTime - startTime} ms`);

    // Extract data from the current URL
    return docs;
  } catch (error) {
    console.error(`Error while extracting data from ${url}: ${error}`);
    return [];
  }
}
const BATCH_SIZE = 10;

async function extractDataFromUrls(
  urls,
  // chatbotId,
) {
  const startTime = Date.now();
  console.log('extracting data from urls...');
  const documents = [];
  const processedUrls = new Set();

  // Process URLs in batches
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    const batch = urls.slice(i, i + BATCH_SIZE);
    for (const url of batch) {
      if (!url || processedUrls.has(url)) {
        continue; // Skip undefined values and URLs that have already been processed
      }
      console.log(`Processing URL: ${url}`);
      const docs = await extractDataFromUrl(url);
      documents.push(...docs);
      processedUrls.add(url);
      const links = await extractLinksFromUrl(url);
      batch.push(...links);
    }
  }
  console.log('data extracted from urls');
  const json = JSON.stringify(documents);
  const endTime = Date.now();
  console.log(`Time taken by extractDataFromUrls: ${endTime - startTime} ms`);
  return documents;
}

async function extractLinksFromUrl(url) {
  try {
    const subUrls = await fetchSubUrls(url);
    return subUrls;
  } catch (error) {
    console.error(`Error while extracting links from ${url}: ${error}`);
    return [];
  }

}

// async function embedDocuments(
//   client,
//   docs,
//   embeddings,
//   chatbotId,
// ) {
//   console.log('creating embeddings...');
//   console.log('chatbotid is ', chatbotId);
//   console.log('Number of documents to embed:', docs.length);

//   // Add chatbotId to metadata of each document
//   const docsModified = docs.map(doc => ({
//     ...doc,
//     metadata: {
//       ...doc.metadata,
//       pinecone_db_name: chatbotId,
//     },
//   }));

  

//   const supabaseConfig = {
//     client: client,
//     tableName: 'documents', // Replace this with your table name
//     // Include other necessary configurations
//   };

//   await SupabaseVectorStore.fromDocuments(docsModified, embeddings, supabaseConfig);
  
//   console.log('embeddings successfully stored in supabase');
//  // console.log('Docs:', docsModified);
// }



async function embedDocuments(
  // client,
  docs,
  embeddings,
  // chatbotId,
  pineconeIndex,
  namespace
) {
  console.log('creating embeddings...');
  console.log('chatbotid is ', chatbotId);
  console.log('Number of documents to embed:', docs.length);

  // Add chatbotId to metadata of each document
  // const docsModified = docs.map(doc => ({
  //   ...doc,
  //   metadata: {
  //     ...doc.metadata,
  //     pinecone_db_name: chatbotId,
  //   },
  // }));

  

  // const supabaseConfig = {
  //   client: client,
  //   tableName: 'documents', // Replace this with your table name
  //   // Include other necessary configurations
  // };

  // await SupabaseVectorStore.fromDocuments(docs, embeddings, supabaseConfig);

  await PineconeStore.fromDocuments(docs, embeddings, {
    pineconeIndex,
    namespace,
  });
  
  console.log('embeddings successfully stored in supabase');
 // console.log('Docs:', docsModified);
}

async function splitDocsIntoChunks(docs) {
  const startTime = Date.now();
  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 2000,
    chunkOverlap: 200,
  });
  const endTime = Date.now();
  console.log(`Time taken by splitDocsIntoChunks: ${endTime - startTime} ms`);
  return await textSplitter.splitDocuments(docs);
}


export async function runCascade(url, pineconeIndex, namespace) {
  const startTime = Date.now();
  console.log('Running the runCascade function with URL:', url);
  // Extract data from all sub-routes using a breadth-first search
  const rawDocs = await extractDataFromUrls([url]);
  // Split docs into chunks for OpenAI context window
  const docs = await splitDocsIntoChunks(rawDocs);
  //console.log('these are the splitted docs: ', docs)
  // Embed docs into Supabase
  const endTime = Date.now();
  console.log(`Time taken by runCascade: ${endTime - startTime} ms`);
  await embedDocuments(docs, new OpenAIEmbeddings(), pineconeIndex, namespace);
}

export async function run(
  urls,
  // chatbotId,
  index,
  namespace,
  cascade = false,
  updateStatus // Add this parameter
) {

  const pinecone = new PineconeClient();

  await pinecone.init({
    apiKey: process.env.REACT_APP_REACT_APP_PINECONE_API_KEY,
    environment: process.env.REACT_APP_REACT_APP_PINECONE_BOTS_1_ENV,
  });

  const pineconeIndex = pinecone.Index(index);


  try {
    const totalSteps = urls.length + 3; // 3 for rawDocs, splitDocs, embedDocuments, add more if necessary
    let currentStep = 0;
    
    const startTime = Date.now();
    
    if (cascade) {
      // Call the cascade function for each URL
      console.log('Running the runCascade function with URLs:', urls);
      updateStatus('Running the runCascade function with URLs', (currentStep++ / totalSteps) * 100);
      for (const url of urls) {
        await runCascade(url, pineconeIndex, namespace);
      }
    } else {
      console.log('Running the normal run function with URLs:', urls);
      updateStatus('Running the normal run function with URLs', (currentStep++ / totalSteps) * 100);
      
      // Call the non-cascade function for the provided URLs
      const rawDocs = await extractDataFromUrls(urls);
      //console.log('these are the raw docs from the normal run: ', rawDocs);
      updateStatus('Raw docs from the normal run have been extracted', (currentStep++ / totalSteps) * 100);
      
      const docs = await splitDocsIntoChunks(rawDocs);

      //console.log('these are the splitted docs from the normal run: ', docs);
      updateStatus('Docs have been split in the normal run', (currentStep++ / totalSteps) * 100);
      
      await embedDocuments(
        // pinecone,
        docs,
        new OpenAIEmbeddings({
          'openAIApiKey': process.env.REACT_APP_OPENAI_API_KEY
        }),
        // chatbotId,
        pineconeIndex,
        namespace
      );
      
      const endTime = Date.now();
      console.log(`Time taken by run: ${endTime - startTime} ms`);
      updateStatus('Embedding documents completed', 100);
    }
  } catch (error) {
    console.log('error occurred:', error);
    updateStatus('An error occurred', 100);
  }
}
