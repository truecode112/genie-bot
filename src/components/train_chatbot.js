import TabComponent from "./tabs";
import { useState, useEffect } from "react";
import supabase from "../utils/supabase_client";
import { TrashIcon } from "@heroicons/react/24/outline";
import useNotification from "../utils/notification";
import isURL from "../utils/is_url";

export default async function TrainChatbot() {
  const [uniqueSources, setUniqueSources] = useState([]);
  const [notification, notify] = useNotification();
  const [showMore, setShowMore] = useState(false);
  const [chunks, setChunks] = useState([]);

  const pinecone_db_name = "rayn";


  //  This fetches chatbot metadata for sources UI
  // async function fetchDocuments(pinecone_db_name, updater) {
  //   if (!pinecone_db_name) return;

  //   console.log(`Fetching documents for chatbotId: ${pinecone_db_name}`);

  //   try {
  //     const { data, error } = await supabase
  //       .from("documents")
  //       .select("*")
  //       .eq("metadata->>pinecone_db_name", `${pinecone_db_name}`);

  //     console.log("Fetched documents:", data);

  //     if (error) {
  //       console.error("Error fetching documents: ", error);
  //       throw error;
  //     }

  //     // updater => setChunks
  //     updater(data || []);
  //   } catch (error) {
  //     console.error("Error fetching documents: ", error);
  //   }
  // }

  // const deleteDocument = async (doc) => {
  //   try {
  //     const { error } = await supabase
  //       .from("documents")
  //       .delete()
  //       .eq("metadata->>source", `${doc}`);

  //     if (error) {
  //       notify("error", "Error deleting source", "Please try again");
  //     } else {
  //       await fetchDocuments(pinecone_db_name, setChunks);
  //       notify("success", "Source successfully deleted");
  //     }

  //     // Refresh the DataTable component
  //     // await fetchDocuments();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // function sortSources(items) {
  //   // URLs come last.

  //   const sortedItems = [...items];

  //   sortedItems.sort((a, b) => {
  //     const aSource = a.metadata.source;
  //     const bSource = b.metadata.source;
  //     // Check if 'a' is a URL and 'b' is not
  //     if (isURL(aSource) && !isURL(bSource)) {
  //       return 1; // 'a' is a URL, so it should come after 'b'
  //     }

  //     // Check if 'b' is a URL and 'a' is not
  //     if (isURL(bSource) && !isURL(aSource)) {
  //       return -1; // 'b' is a URL, so it should come before 'a'
  //     }

  //     return 0; // No preference, maintain the current order
  //   });

  //   return sortedItems;
  // }

  // const updateUniqueUrls = () => {
  //   const source = chunks.reduce((acc, url) => {
  //     if (!acc.find((doc) => doc.metadata.source === url.metadata.source)) {
  //       acc.push(url);
  //     }
  //     return acc;
  //   }, []);

  //   const sortedSources = sortSources(source);

  //   setUniqueSources(sortedSources);
  // };

  // useEffect(() => {
  //   const refreshSources = async () => {
  //     console.log("Fetching sources");
  //     if (pinecone_db_name !== null && pinecone_db_name !== undefined) {
  //       await fetchDocuments(pinecone_db_name, setChunks);
  //     }
  //   };
  //   refreshSources();
  // }, [pinecone_db_name]);

  // useEffect(() => {
  //   updateUniqueUrls();
  // }, [chunks]);

  return (
    <main className="my-[24px] w-full rounded-[8px] border border-[#E5E7EB] text-white">
      {notification}
      <div className="px-[24px] py-[24px]">
        <h2 className="mb-[8px]">
          <strong>Training</strong>
        </h2>
        <p>
          {`Train your chatbot is adding URL(s) of any website or a document, and the
            chatbot will extract all the data from the source. It
            will then be able to answer any question related to that content.`}
        </p>
      </div>
      <div className="my-[24px] px-[24px]">
        <TabComponent
          // fetchDocuments={fetchDocuments}
          // setChunks={setChunks} 
          
          />

        {/* <div className="pt-[24px]">
          {Boolean(uniqueSources.length) && (
            <h3 className="mb-4">
              <strong>{"Sources"}</strong>
            </h3>
          )}
          {uniqueSources.map((source, i) => {
            const displaySource = source.metadata.source;

            if (i < 4 && !showMore) {
              return (
                <div key={source.id}>
                  <div className="mb-[16px] flex justify-between">
                    <p className="text-[14px]">
                      {displaySource.length > 50
                        ? displaySource.substring(0, 50).toLowerCase() + "..."
                        : displaySource.toLowerCase()}
                    </p>

                    <div
                      id={source.id}
                      onClick={() => deleteDocument(displaySource)}
                    >
                      <TrashIcon className="h-[18px] w-[18px] cursor-pointer" />
                    </div>
                  </div>
                </div>
              );
            }

            if (showMore) {
              return (
                <div key={source.id}>
                  <div className="mb-[16px] flex justify-between">
                    <p className="text-[14px]">
                      {displaySource.length > 50
                        ? displaySource.substring(0, 50).toLowerCase() + "..."
                        : displaySource.toLowerCase()}
                    </p>

                    <div
                      id={source.id}
                      onClick={() => deleteDocument(displaySource)}
                    >
                      <TrashIcon className="h-[18px] w-[18px] cursor-pointer" />
                    </div>
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>
        {uniqueSources.length >= 4 && (
          <p
            className="cursor-pointer text-[#51A760]"
            onClick={() => setShowMore((prev) => !prev)}
          >
            {showMore ? "show less" : "show more"}
          </p>
        )} */}
      </div>
    </main>
  );
}


