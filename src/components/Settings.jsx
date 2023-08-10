import { useState } from "react";

export default function Settings() {

  const [formData, setFormData] = useState({
    projectName: "",
    telegramUsername: "",
    referralCode: "",
    tokenAddress: "",
  });



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { projectName, telegramUsername } = formData;

    console.log("FROM SETTINGS TAB: ", JSON.stringify(formData));
    
    if (projectName && telegramUsername) {
      // Submit the form or perform further actions
      alert("Form submitted");
    } else {
      alert("Please fill out all fields.");
    }
  };
    return (
      <>
        <div id="settings" className="w-full">
          <div id="title-desc" className="text-center">
            <h1 className="text-3xl font-semibold mt-12 text-white">
              Account Settings
            </h1>
            <p className="text-purple-200 opacity-70 mt-3 mb-6 font-light">
              Please fill in all the fields below
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div id="account-settings" className="space-y-2">
              <div id="project-name">
                <label className="sr-only">Project Name</label>
                <input
                  id="project-name-input"
                  className="block w-full hover:border-indigo-800 border-indigo-950 bg-transparent rounded-md border-0 px-4 h-14 py-1.5 text-white shadow-sm ring-2 ring-inset ring-indigo-950 placeholder:text-purple-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Project Name"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleInputChange}
                />
              </div>

              <div id="telegram-username">
                <label className="sr-only">Telegram Username</label>
                <input
                  id="telegram-username-input"
                  className="block w-full hover:border-indigo-800 border-indigo-950 bg-transparent rounded-md border-0 px-4 h-14 py-1.5 text-white shadow-sm ring-2 ring-inset ring-indigo-950 placeholder:text-purple-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Telegram Username Name"
                  name="telegramUsername"
                  value={formData.telegramUsername}
                  onChange={handleInputChange}
                />
              </div>
              <div id="referral-code">
                <label className="sr-only">Referral Code</label>
                <input
                  id="referral-code-input"
                  className="block w-full hover:border-indigo-800 border-indigo-950 bg-transparent rounded-md border-0 px-4 h-14 py-1.5 text-white shadow-sm ring-2 ring-inset ring-indigo-950 placeholder:text-purple-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Referral Code"
                  name="referralCode"
                  value={formData.referralCode}
                  onChange={handleInputChange}
                />
                <p className="text-purple-200 text-xs mt-2">
                  *Add a referral code to get 10% off on all future payments
                </p>
              </div>
              <div id="token-address">
                <label className="sr-only">Token Contract Address</label>
                <input
                  id="token-address-input"
                  className="block w-full hover:border-indigo-800 border-indigo-950 bg-transparent rounded-md border-0 px-4 h-14 py-1.5 text-white shadow-sm ring-2 ring-inset ring-indigo-950 placeholder:text-purple-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Token Contract Address"
                  name="tokenAddress"
                  value={formData.tokenAddress}
                  onChange={handleInputChange}
                />
                <p className="text-purple-200 text-xs mt-2">
                  *Leave empty if not launched yet
                </p>
              </div>
            </div>

            <div id="actions" className="w-full flex mt-[24px] justify-between">
              <button className="w-[45%] py-[20px] px-[32px] rounded-[16px] text-white border-[1.5px] border-fuchsia-400 font-bold">
                Go Back
              </button>

              <button
                type="submit"
                className="w-[45%] py-[20px] px-[32px] rounded-[16px] text-white bg-fuchsia-300 font-bold"
              >
                Next Step
              </button>
            </div>
          </form>
        </div>
      </>
    );
}