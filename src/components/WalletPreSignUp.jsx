export default function WalletPreSignUp() {
    return (
      <div id="connect-wallet" className="w-full">
        <div id="title-desc" className="text-center px-4">
          <h1 className="text-3xl font-semibold mt-12 text-white">
            Connect wallet
          </h1>
          <p className="text-purple-200 opacity-70 mt-3 mb-6 font-light">
            Choose a wallet you would like to connect. No funds will be
            withdrawn. Afters 7 days trial you can choose a subscription plan.
          </p>
        </div>

        <div id="integrations" className="space-y-2">
          <button
            id="metamask"
            className="w-full border-2 hover:border-indigo-800 border-indigo-950 bg-transparent flex items-center h-14 rounded-md p-4"
          >
            <div id="integration-icon" className="">
              <img
                src="/metamask-integration-icon.svg"
                alt="Metamask Icon"
                className="w-8 h-8"
              />
            </div>
            <div id="integration-name" className="ml-4 font-medium text-white">
              Metamask
            </div>
          </button>

          <button
            id="coinbase"
            className="w-full border-2 hover:border-indigo-800 border-indigo-950 bg-transparent flex items-center h-14 rounded-md p-4"
          >
            <div id="integration-icon" className="">
              <img
                src="/coinbase-integration-icon.svg"
                alt="Coinbase Icon"
                className="w-8 h-8"
              />
            </div>
            <div id="integration-name" className="ml-4 font-medium text-white">
              Coinbase Wallet
            </div>
          </button>

          <button
            id="wallet"
            className="w-full border-2 hover:border-indigo-800 border-indigo-950 bg-transparent flex items-center h-14 rounded-md p-4"
          >
            <div id="integration-icon" className="">
              <img
                src="/wallet-integration-icon.svg"
                alt="Wallet Icon"
                className="w-8 h-8"
              />
            </div>
            <div id="integration-name" className="ml-4 font-medium text-white">
              Wallet Connect
            </div>
          </button>

          <button
            id="portis"
            className="w-full border-2 hover:border-indigo-800 border-indigo-950 bg-transparent flex items-center h-14 rounded-md p-4"
          >
            <div id="integration-icon" className="">
              <img
                src="/portis-integration-icon.svg"
                alt="Portis Icon"
                className="w-8 h-8"
              />
            </div>
            <div id="integration-name" className="ml-4 font-medium text-white">
              Portis
            </div>
          </button>

          <button
            id="opera"
            className="w-full border-2 hover:border-indigo-800 border-indigo-950 bg-transparent flex items-center h-14 rounded-md p-4"
          >
            <div id="integration-icon" className="">
              <img
                src="/opera-integration-icon.svg"
                alt="Opera Icon"
                className="w-8 h-8"
              />
            </div>
            <div id="integration-name" className="ml-4 font-medium text-white">
              Opera
            </div>
          </button>
        </div>

        <div id="actions" className="w-full flex mt-[24px] justify-between">
          <button
            className="w-[45%] py-[20px] px-[32px] rounded-[16px] text-white border-[1.5px] border-fuchsia-400 font-bold"
                    
          >
            Go Back
          </button>

          <button
            className="w-[45%] py-[20px] px-[32px] rounded-[16px] text-white bg-fuchsia-300 font-bold"
          >
            Next Step
          </button>
        </div>
      </div>
    );
}