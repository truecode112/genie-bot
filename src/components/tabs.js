import { Tabs } from "antd";
import ScrapperTabContent from "./scrapper_tab_component";
import FileUpload from "./file_upload_component";

export default function TabComponent({ chatbotId, fetchDocuments, setChunks }) {
  const items = [
    {
      key: "1",
      label: `Add a URL`,
      children: (
        <ScrapperTabContent
          fetchDocuments={fetchDocuments}
          setChunks={setChunks}
        />
      ),
    },
    {
      key: "2",
      label: `Add a document`,
      children: (
        <FileUpload
          chatbotId={chatbotId}
          fetchDocuments={fetchDocuments}
          setChunks={setChunks}
        />
      ),
    },
  ];

  return <Tabs defaultActiveKey="1" items={items} />;
}
