import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderWeb3 from "../components/HeaderWeb3";
import StepsContainer from "../components/StepsContainer";
import GenieWhite from "../components/GenieWhite";
import Footer from "../components/Footer";
import styles from "./Chooseyourgenie.module.css";
import { useAddress } from "@thirdweb-dev/react";
import ForQuestions from "../components/ForQuestions";

const Chooseyourgenie: FunctionComponent = () => {
  const navigate = useNavigate();
  const address = useAddress();
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    if (!address && !hasRedirected) {
      setHasRedirected(true);
      navigate('/login');
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

  const onGenie1Click = useCallback(() => {
    navigate("/waitlist");
  }, [navigate]);

  const onGenie2Click = useCallback(() => {
    navigate("/waitlist");
  }, [navigate]);

  const onGenie3Click = useCallback(() => {
    navigate("/waitlist");
  }, [navigate]);

  return (
    <div className={styles.chooseyourgenie}>
      <div className={styles.autolayout}>
        <HeaderWeb3
          onLogo31Click={onLogo31Click}
          onMenuItemClick={onMenuItemClick}
          onMenuItem1Click={onMenuItem1Click}
          onMenuItem2Click={onMenuItem2Click}
        />
        <div className={styles.howToGetStarted}>
          <div className={styles.howToGetStartedInner}>
            <div className={styles.howDoesItWorkWrapper}>
              <div className={styles.howDoesItContainer}>
                <p className={styles.howDoesItWork}>
                  <span className={styles.how}>How</span>
                  <span> does it work?</span>
                </p>
              </div>
            </div>
          </div>
          <StepsContainer
            walletConnectionText="Connect"
            walletConnectionStatusTex="your wallet"
            walletConnectionButtonTex="Connected"
          />
        </div>
        <div className={styles.genieoptions}>
          <GenieWhite timePeriodText="7 days " ethPriceText="0.15  ETH" onGenieClick={onGenie1Click} />
          <GenieWhite timePeriodText="30 days " ethPriceText="0.5  ETH" onGenieClick={onGenie2Click}/>
          <GenieWhite timePeriodText="90 days " ethPriceText="1.2  ETH" onGenieClick={onGenie3Click}/>
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

export default Chooseyourgenie;
