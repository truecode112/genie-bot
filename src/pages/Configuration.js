import { useState } from "react";
import WalletPreSignUp from "../components/WalletPreSignUp";
import Settings from "../components/Settings";
import Admins from "../components/Admins";
import TrainChatbot from "../components/train_chatbot";

const tabs = [
  { name: "Wallet", current: true },
  { name: "Settings", current: false },
  { name: "Admins and Groups", current: false },
  { name: "Training", current: false}
];

const dropdownSVG = `
url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%235A67D8' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")
`;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Configuration() {
   const [activeTab, setActiveTab] = useState("Wallet");

  return (
    <div className="min-h-screen bg-black flex flex-col items-center pb-32">
      <div
        id="navbar"
        className="h-16 mt-4 w-full flex justify-between items-center"
      >
        <div className="text-white px-8">
          <img src="/geniebot.svg" alt="Coinbase Icon" className="w-34 h-34" />
        </div>
        <div className="px-8">
          <button className="border border-purple-500 font-medium text-white px-6 py-3 rounded-md">
            Log Out
          </button>
        </div>
      </div>

      <main className="mt-8 w-5/6 md:w-1/2 max-w-[450px] flex flex-col items-center mb-auto">
        <div id="tabsMobile" className="w-full">
          <div className="sm:hidden">
            <label htmlFor="tabsMobile" className="sr-only">
              Select a tab
            </label>
            <select
              id="tabs"
              name="tabs"
              style={{
                appearance: "none",
                backgroundColor: "transparent",
                borderColor: "#5A67D8",
                borderWidth: "2px",
                borderRadius: "0.375rem",
                color: "#A0AEC0",
                width: "100%",
                padding: "0.5rem 2rem 0.5rem 1rem",
                outline: "none",
                cursor: "pointer",
                backgroundImage: dropdownSVG,
                backgroundPosition: "right 1rem center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "fill",
              }}
              value={activeTab}
              onChange={(event) => setActiveTab(event.target.value)}
              defaultValue={tabs.find((tab) => tab.current)?.name || ""}
            >
              {tabs.map((tab) => (
                <option key={tab.name} style={{ backgroundColor: "#1A202C" }}>
                  {tab.name}
                </option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <div className="border-b border-gray-500">
              <nav className="-mb-px flex" aria-label="Tabs">
                {tabs.map((tab) => (
                  <a
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={classNames(
                      tab.name === activeTab
                        ? "border-purple-300 text-purple-400"
                        : "border-transparent text-gray-200 hover:border-purple-300 hover:text-purple-200",
                      "w-1/4 border-b-2 py-4 px-1 text-center text-sm font-medium"
                    )}
                    aria-current={tab.current ? "page" : undefined}
                  >
                    {tab.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {activeTab === "Wallet" && <WalletPreSignUp />}

        {activeTab === "Settings" && <Settings />}

        {activeTab === "Admins and Groups" && <Admins />}

        {activeTab === "Training" && <TrainChatbot />}
      </main>
    </div>
  );
}
