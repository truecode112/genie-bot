import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { ethers, providers } from "ethers";
import { useNavigate } from "react-router-dom";
import HeaderWeb3 from "../components/HeaderWeb3";
import Footer from "../components/Footer";
import styles from "./CheckOut.module.css";
import { Web3Button, useAddress, useContract, useContractWrite, useContractRead } from "@thirdweb-dev/react";
import emailjs from 'emailjs-com';
import ForQuestions from "../components/ForQuestions";

const CheckOut90: FunctionComponent = () => {
  const navigate = useNavigate();
  const address = useAddress();
  const refManagerContractAddress = "0x3ec7F1712D1d73468246cE27D64D83D4cd6EC7f7";
  const publicLockContractAddress = "0x7A05F0de1eb8B65655df774c7b99B031BBFd33EF";

  const { contract: refManagerContract } = useContract(refManagerContractAddress);
  const { contract: publicLockContract } = useContract(publicLockContractAddress);
  const { mutateAsync: purchase, isLoading } = useContractWrite(publicLockContract, "purchase")

  const valueInEth = 1.2;
  const valueInWei = ethers.utils.parseEther(valueInEth.toString());
  const discountRate = 0.1; // 10% discount
  const valueInEthDiscounted = valueInEth * (1 - discountRate); // calculate the discounted value
  const valueInWeiDiscounted = ethers.utils.parseEther(valueInEthDiscounted.toString()); // convert it to wei
   
  const [projectName, setProjectName] = useState("");
  const [telegramUsername, setTelegramUsername] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [referrerAddress, setReferrerAddress] = useState("");

  // useEffect to get referral code from sessionStorage
  useEffect(() => {
    const referralCode = sessionStorage.getItem('affiliateCode');
    if (referralCode) {
      setReferralCode(referralCode);
    }
  }, []);

  console.log("Referral Code:", referralCode);

  // Use this hook to get referrer address using the referral code  

  const { data: referrerData } = useContractRead(
    refManagerContract,
    "getReferrerAddress",
    [referralCode],
  );
  

  console.log("Initial Referrer Data:", referrerData);

  useEffect(() => {
    if (referrerData) {
      setReferrerAddress(referrerData);
      console.log("Referrer Address:", referrerData)
    } 
  }, [referrerData]);

  const [isChecked, setIsChecked] = useState(false);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const call = async () => {
    try {
      // Clear the error message before the transaction starts
      setErrorMessage(null);
  
      // Default referral address
      const defaultReferralAddress = "0x6271677Be749c45f2F2C88f4ABE733E6c5AeA9EC";
  
      // Use the default referral address if no address was provided by the user
      let finalReferralAddress;
      let finalValueInWei;

      if (referrerAddress && referrerAddress !== ethers.constants.AddressZero && referralCode !== "") {
        finalReferralAddress = referrerAddress;
        finalValueInWei = valueInWeiDiscounted;
      } else if (referrerAddress === ethers.constants.AddressZero && referralCode !== "") {
        finalReferralAddress = ethers.constants.AddressZero;
        finalValueInWei = valueInWei;
      } else {
        finalReferralAddress = defaultReferralAddress;
        finalValueInWei = valueInWei;
      }

      const response = await purchase({
        args: [[0], [address], [finalReferralAddress], [address], [0]], 
        overrides: {value: finalValueInWei}
      });
  
      console.info("contract call initiated", response);
  
      // Extract receipt from the response.
      const receipt = response.receipt;
  
      // Print the transaction receipt to the console.
      console.info("Transaction receipt:", receipt);
  
      if(receipt.status) {
        console.info("transaction successful");
  
        // When the transaction is confirmed, send the email.
        const templateParams = {
          telegram_username: telegramUsername,
          project_name: projectName
        };
  
        emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID, 
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
          templateParams, 
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
          .then((response) => {
            console.log('Email sent successfully!', response.status, response.text);
            navigate("/success");
          }).catch((err) => {
            console.error('Failed to send the email:', err);
          });
      } else {
        // Transaction failed but didn't throw an exception
        console.error("Transaction failed without throwing an exception");
        setErrorMessage("Transaction failed. Please try again.");
      }
    } catch (err: any) {
      console.log(err);
      let userFriendlyMessage;
    
      // Access the error message directly
      let errMessage = err.message;
    
      // Check for 'insufficient funds' error
      if (errMessage && errMessage.includes('insufficient funds')) {
        userFriendlyMessage = "You don't have enough funds to complete this transaction.";
      }
    
      // If 'insufficient funds' error is not detected, set a generic error message
      if (!userFriendlyMessage) {
        userFriendlyMessage = "An error occurred while processing your transaction. Please try again.";
      }
    
      console.error("contract call failure", err);
      setErrorMessage(userFriendlyMessage);
    }
  };


  const onLogo31Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMenuItemClick = useCallback(() => {
    navigate("/token");
  }, [navigate]);

  const onMenuItem1Click = useCallback(() => {
    window.open("https://geniebot.gitbook.io/geniebot-whitepaper");
  }, []);

  const onMenuItem2Click = useCallback(() => {
    navigate("/features");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTokenClick = useCallback(() => {
    navigate("/token");
  }, [navigate]);

  const onTermsClick = useCallback(() => {
    navigate("/terms");
  }, [navigate]);

  const onWhitepaperClick = useCallback(() => {
    window.open("https://geniebot.gitbook.io/geniebot-whitepaper");
  }, []);

  const onGetStartedClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onRegisterClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onFeaturesClick = useCallback(() => {
    navigate("/features");
  }, [navigate]);

  return (
    <div className={styles.checkOut}>
      <div className={styles.autolayout}>
        <HeaderWeb3
          onLogo31Click={onLogo31Click}
          onMenuItemClick={onMenuItemClick}
          onMenuItem1Click={onMenuItem1Click}
          onMenuItem2Click={onMenuItem2Click}
        />
        <div className={styles.frameParent}>
          <div className={styles.checkOutWrapper}>
            <div className={styles.checkOut1}>
              <span>Check</span>
              <span className={styles.out}> out</span>
            </div>
          </div>
          {errorMessage && (
  <div className={styles.errormsgframe}>
    <div className={styles.displayErrorMessage}>
      {errorMessage}
    </div>
  </div>
)}
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameParent2}>
                      <div className={styles.projectNameWrapper}>
                        <div
                          className={styles.projectName}
                        >{`Project name * `}</div>
                      </div>
                      <input
                          className={styles.frameChild}
                          type="text"
                          placeholder="Enter the name of your project"
                          maxLength={50}
                          value={projectName}
                          onChange={(e) => setProjectName(e.target.value)}
                        />
                    </div>
                    <div className={styles.frameParent2}>
                      <div className={styles.projectNameWrapper}>
                        <div className={styles.projectName}>
                          Telegram username *
                        </div>
                      </div>
                      <input
                          className={styles.frameChild}
                          type="text"
                          placeholder="Enter your telegram username"
                          maxLength={50}
                          value={telegramUsername}
                          onChange={(e) => setTelegramUsername(e.target.value)}
                        />
                    </div>
                    <div className={styles.frameParent2}>
                      <div className={styles.projectNameWrapper}>
                        <div className={styles.projectName}>
                          Referral Address (optional for 10% lifetime discount)
                        </div>
                      </div>
                      <input
                          className={styles.frameChild}
                          type="text" 
                          placeholder="Enter referral link (optional)" 
                          value={referralCode || ''} 
                          onChange={(e) => setReferralCode(e.target.value)} 
                      />
                    </div>
                    <div className={styles.vectorParent}>
                      <input
                          type="checkbox"
                          className={styles.vectorIcon}
                          checked={isChecked}
                          onChange={(e) => setIsChecked(e.target.checked)}
                      />
                      <div className={styles.iAgreeWith}>
                          I agree with the <a href="/terms" target="_blank" rel="noopener noreferrer">terms of service</a>
                      </div>
                  </div>
                  </div>
                  
                  <Web3Button
                      contractAddress={publicLockContractAddress}
                      className={styles.mainButton}
                      theme="dark"
                      action={call}
                      isDisabled={!telegramUsername || !projectName || !isChecked}
                    >
                    Confirm
                  </Web3Button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.forQuestionsWrapper}>
          <div className={styles.forQuestions}>
          <ForQuestions productId="/atomsiconsblackcurveedgetelegram.svg" />
          </div>
        </div>
        <Footer
          onHomeClick={onHomeClick}
          onTokenClick={onTokenClick}
          onTermsClick={onTermsClick}
          onWhitepaperClick={onWhitepaperClick}
          onGetStartedClick={onGetStartedClick}
          onRegisterClick={onRegisterClick}
          onFeaturesClick={onFeaturesClick}
        />
      </div>
    </div>
  );
};



export default CheckOut90;
