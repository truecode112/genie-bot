import { OpenAIEmbeddings } from "langchain/embeddings/openai";

export default function getOpenAiEmbeddingModel() {
  const embeddingModel = "text-embedding-ada-002";
  const { OPENAI_API_KEY } = process.env;

  return new OpenAIEmbeddings({
    openAIApiKey: OPENAI_API_KEY,
    modelName: embeddingModel,
  });
}
