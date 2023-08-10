export default async function postTrainingData(formData, pinecone_db_name) {
  return await fetch(`/api/file-training-background/?pinecone_db_name=${pinecone_db_name}`, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
      Content: "multipart/form-data",
    },
  });
}
