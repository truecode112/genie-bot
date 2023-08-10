import { useRef, useState, useEffect } from "react";
import postTrainingData from "../utils/post_training_data";
import useNotification from "../utils/notification";
import DummyProgressBar from "./dummy_progress";

export default function FileUpload({
  fetchDocuments,
  setChunks
}) {
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dragEnter, setDragEnter] = useState(false);
  const [notify, openNotify] = useNotification();
  const [completed, setCompleted] = useState(false);

  const pinecone_db_name = 'rayn';


  const handleDragOver = (e) => {
    // This simply turns off default browser behavior of opening files.
    e.preventDefault();
    setDragEnter(true);
  };

  const handleFileSelect = ({ target }) => {
    const fileList = target.files;
    const file = fileList[0];
    setFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setDragEnter(false);
    }, 3000);

    if (e.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...e.dataTransfer.items].forEach((item) => {
        // If dropped items aren't files, reject them
        if (item.kind === "file") {
          const file = item.getAsFile();
          setFile(file);
        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)
      [...e.dataTransfer.files].forEach((file) => {
        setFile(file);
      });
    }
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    if (file) {
      formData.append("file", file);

      try {
        setLoading(true);
        const response = await postTrainingData(formData, pinecone_db_name);
        setLoading(false);

        if (response.status === 202) {
          setCompleted(true);
          openNotify(
            "success",
            "Training complete, your chatbot is now ready."
          );
          // const data = await response.json();
        } else {
          setLoading(false);
          openNotify(
            "error",
            "Something went wrong, ensure file type is supported"
          );
        }
      } catch (error) {
        setLoading(false);
        openNotify(
          "error",
          "Something went wrong, ensure file type is supported"
        );
      }
    }

    // refresh sources regardless.
    // await fetchDocuments(pinecone_db_name, setChunks);
  };

  useEffect(() => {
    if (file) {
      handleFileUpload();
    }
  }, [file]);

  return (
    <>
      {notify}
      <main
        className={`flex h-[321px] w-full flex-col items-center justify-center rounded-[8px] border-[1px] border-dashed ${
          dragEnter ? `border-[#00AB55]` : `border-[#DFE3E8]`
        } py-[40px]`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={(e) => (e.preventDefault(), setDragEnter(true))}
        onDragLeave={(e) => (e.preventDefault(), setDragEnter(false))}
      >
        <img
          src="/illustration_upload.png"
          alt="Upload illustration"
          height={'212px'}
          width={'160px'}
        />

        <div className="mt-[24px] text-center">
          <p>
            <strong>Select files</strong>
          </p>

          <input
            type="file"
            hidden
            accept=".pdf, .docx, .txt, .json, .csv"
            ref={inputRef}
            onChange={(e) => handleFileSelect(e)}
          />

          <p className="mt-[8px]">
            Drop files here or click{" "}
            <span
              className="cursor-pointer text-[#00AB55] underline"
              onClick={() => inputRef.current.click()}
            >
              browse
            </span>{" "}
            to upload from your computer.
          </p>
          <p className="mt-[8px] text-[#637381]">
            We currently support the following file types: pdf, txt, json, csv,
            docx
          </p>
        </div>
      </main>

      <div className="mt-[12px] flex gap-x-[8px]">
        {loading && (
          <DummyProgressBar
            timer={2000}
            start={loading}
            completed={completed}
          />
        )}
      </div>
    </>
  );
}
