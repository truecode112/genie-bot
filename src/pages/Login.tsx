import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderWeb3 from "../components/HeaderWeb3";
import StepsContainerWeb3 from "../components/StepsContainerWeb3";
import ForQuestions from "../components/ForQuestions";
import Footer from "../components/Footer";
import styles from "./Login.module.css";
import { useAddress } from "@thirdweb-dev/react";
import { Helmet } from 'react-helmet-async';

const Login: FunctionComponent = () => {
  const navigate = useNavigate();
  const address = useAddress();
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    if (address && !hasRedirected) {
      setHasRedirected(true);
      navigate('/chooseyourgenie');
    }
  }, [address, navigate, hasRedirected]);
  
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
    window.open("https://geniebot.gitbook.io/geniebot-whitepaper/");
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
    <div className={styles.login}>
      <Helmet>
      <title>Get Started | GenieBot</title>
      <meta name="description" 
      content="Sign up or log in to your existing GenieBot account.  " />
      </Helmet>
      <div className={styles.autolayout}>
        <HeaderWeb3
          onLogo31Click={onLogo31Click}
          onMenuItemClick={onMenuItemClick}
          onMenuItem1Click={onMenuItem1Click}
          onMenuItem2Click={onMenuItem2Click}
        />
        <div className={styles.howToGetStartedIpadphone}>
          <div className={styles.howToGetStarted}>
            <div className={styles.howToGetStartedInner}>
              <div className={styles.howToGetStartedWrapper}>
                <div className={styles.howToGetContainer}>
                  <p className={styles.howDoesItWork}>
                    <span className={styles.how}>How</span>
                    <span> to get started?</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.frameWrapper}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameContainer}>
                    <div className={styles.wrapper}>
                      <div className={styles.div}>1</div>
                    </div>
                    <div className={styles.connectYourWalletWrapper}>
                      <div className={styles.div}>
                        <span>Connect</span>
                        <span className={styles.span}>{` `}</span>
                        <span className={styles.yourWallet}>your wallet</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
                    <button className={styles.desktopOnlyWrapper}>
                      <div className={styles.desktopOnly}>Desktop only</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.frameParent1}>
                  <div className={styles.frameContainer}>
                    <div className={styles.container}>
                      <div className={styles.div}>2</div>
                    </div>
                    <div className={styles.chooseYourGenieWrapper}>
                      <div className={styles.div}>
                        <span>Choose</span>
                        <span className={styles.yourWallet}> your genie</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.chooseTheTypeAndLengthOfWrapper}>
                    <div className={styles.chooseTheType}>
                      Choose the type and length of your Geniebot membership,
                      enter your telegram handle and complete your payment on
                      the Ethereum network.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.frameParent3}>
                  <div className={styles.frameContainer}>
                    <div className={styles.frame}>
                      <div className={styles.div}>3</div>
                    </div>
                    <div className={styles.connectYourWalletWrapper}>
                      <div className={styles.div}>
                        <span>Configure</span>
                        <span className={styles.span}>{` `}</span>
                        <span className={styles.yourWallet}>your bot</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.weWillContactYouOnTelegraWrapper}>
                    <div className={styles.chooseTheType}>
                      We will contact you on Telegram within 24 hours after your
                      purchase to configure the bot for you. We will customize
                      the bot to your needs.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent5}>
              <div className={styles.frameParent6}>
                <div className={styles.frameWrapper3}>
                  <div className={styles.forQuestionsWrapper}>
                    <div className={styles.div}>
                      <span>For</span>
                      <span className={styles.how}> questions</span>
                    </div>
                  </div>
                </div>
                <div className={styles.pleaseContactGeniebotinfoOWrapper}>
                  <div className={styles.pleaseContactGeniebotinfo}>
                    Please contact @geniebotinfo on Telegram. We will be happy
                    to answer your questions or enquiries.
                  </div>
                </div>
              </div>
              <div className={styles.atomsiconsblackcurveEdgetWrapper}>
                <img
                  className={styles.atomsiconsblackcurveEdget}
                  alt=""
                  src="/atomsiconsblackcurveedgetelegram2.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.howToGetStarted2}>
          <div className={styles.howToGetStartedChild}>
            <div className={styles.howToGetStartedWrapper}>
              <div className={styles.howDoesItContainer}>
                <p className={styles.howDoesItWork}>
                  <span className={styles.how}>How</span>
                  <span> does it work?</span>
                </p>
              </div>
            </div>
          </div>
          <StepsContainerWeb3
            walletConnectionText="Connect"
            walletConnectionStatusTex="your wallet"
            walletConnectionButtonTex="Connect wallet"
            propBackgroundColor="#fff"
          />
          <ForQuestions productId="/atomsiconsblackcurveedgetelegram.svg" />
        </div>
        <Footer
          propOverflow="hidden"
          propFlexShrink="0"
          propOverflow1="hidden"
          propFlexShrink1="0"
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

export default Login;
