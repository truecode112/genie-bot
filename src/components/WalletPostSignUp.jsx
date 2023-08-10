export default function WalletPostSignUp() {
    return (
      <div id="connect-wallet" className="w-full">
        <div id="title-desc" className="text-center px-4">
          <h1 className="text-3xl font-semibold mt-12 text-white">
            Wallet
          </h1>
          <p className="text-purple-200 opacity-70 mt-3 mb-6 font-light">
            Choose a wallet you would like to connect. No funds will be
            withdrawn. Afters 7 days trial you can choose a subscription plan.
          </p>
        </div>

       {/* Wallet code here */}

        <div id="actions" className="w-full flex mt-[24px] justify-between">
          <button className="w-[45%] py-[20px] px-[32px] rounded-[16px] text-white border-[1.5px] border-fuchsia-400 font-bold">
            Go Back
          </button>

          <button className="w-[45%] py-[20px] px-[32px] rounded-[16px] text-white bg-fuchsia-300 font-bold">
            Next Step
          </button>
        </div>
      </div>
    );
}