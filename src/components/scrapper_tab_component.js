import { useState, useEffect } from "react";
import useNotification from '../utils/notification';
import DummyProgressBar from "./dummy_progress";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";


const ScrapperTabContent = ({setChunks, fetchDocuments}) => {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [status, setStatus] = useState("none");
  const [showAddButton, setShowAddButton] = useState(false);
  const [notification, notify] = useNotification();
  const [index, setIndex] = useState("")
  const [namespace, setNamespace] = useState("");

  const [completed, setCompleted] = useState(false);

  const pinecone_db_name = "rayn";

  const testUserId = "0xbc48cE81894cff7d861193A5b7647083346817aa";

  // Create a reference to the user's document
  const userDocRef = doc(db, "users", testUserId);

  // Get the user's data from the document
  async function getUserData() {
    try {
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        // User data exists
        const userData = userDoc.data();
        const { pinecone_database_name, pinecone_index_name } = userData;
        setIndex(pinecone_index_name);
        setNamespace(pinecone_database_name);

        console.log('index', index)
        console.log("namespace", namespace);
        return;
      } else {
        console.log("User not found");
        return null;
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  }

  useEffect(() => {
    const get = async () => {
        await getUserData();
    }
    
    get();
  }, [testUserId]);

  // Add URL to database and associate it with chatbot ID
  const removeTrailingSlash = (url) => {
    return url.endsWith("/") ? url.slice(0, -1) : url;
  };

  const addWebsiteUrl = async () => {
    // Check if websiteUrl starts with 'https://'
    console.log("Adding website URL:", websiteUrl);
    if (
      !websiteUrl.startsWith("https://") &&
      !websiteUrl.startsWith("http://")
    ) {
      setShowNotification(true);
      return;
    }

    // Normalize the URL to remove trailing slashes
    const normalizedWebsiteUrl = removeTrailingSlash(websiteUrl);
    console.log("Adding website URL:", normalizedWebsiteUrl);

    setWebsiteUrl("");
    setShowAddButton(false);
    // Call the newly separated function at the end of addWebsiteUrl
    runScrapeEmbed();
  };

  async function runScrapeEmbed() {
    // Fetch the URLs stored in the database that matches the given chatbot ID
    setStatus("scraping");

    // Call the API route to run the scrape and embed process
    const requestBody = {
      url: websiteUrl,
      index: index && index,
      namespace: namespace && namespace,
    };

    console.log("Request body:", requestBody);
    console.log("Request body URLs:", requestBody.url);

    try {
      console.log("About to make request to /api/run_scrape_embed");
      const response = await fetch("/api/url-training-background", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify({
        //   url: websiteUrl,
        //   pinecone_db_name,
        // }),
        body: JSON.stringify({
          url: websiteUrl,
          index: index && index,
          namespace: namespace && namespace
        })
      });
      console.log("Response status:", response.status);
      console.log("Response body:", await response.text());

      setStatus("done");
      if (response.status === 202) {
        setCompleted(true);
        notify("success", "Training completed successfully", "");
      } else {
        notify("error", "Error training your chatbot", "Please try again");
      }
    } catch (error) {
      setStatus("error");

      notify("error", "Error training your chatbot", "Please try again");
    }

    // await fetchDocuments(pinecone_db_name, setChunks);
  }

  // Handle URL input change
  function handleWebsiteUrlChange(event) {
    const url = event.target.value;
    setWebsiteUrl(url);
    setShowAddButton(url.length > 0);
    setShowNotification(false);
  }

  return (
    <main>
      {notification}
      <div className="flex w-full gap-x-[8px]">
        <input
          type="text"
          value={websiteUrl}
          onChange={handleWebsiteUrlChange}
          className="h-[38px] w-[90%] rounded border border-[#D1D5DB]"
          style={{ boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)" }}
          placeholder="https://www.yayoi.com"
        />
        <img
          src="/reload.png"
          alt="Add URL Button"
          width={"38px"}
          height={"38px"}
          onClick={addWebsiteUrl}
          className="cursor-pointer"
        />
      </div>

      <div>
        <div className="flex gap-x-[8px] mt-6">
          <>
            {status === "scraping" && (
              <DummyProgressBar
                timer={1000}
                completed={false}
                start={status === "scraping"}
              />
            )}
          </>
        </div>
      </div>
    </main>
  );
}

export default ScrapperTabContent;
