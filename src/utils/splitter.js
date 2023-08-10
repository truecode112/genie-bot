import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

export default function splitter(chunkSize, chunkOverlap) {
  return new RecursiveCharacterTextSplitter({
    chunkSize: chunkSize,
    chunkOverlap: chunkOverlap,
  });
}
