import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderWeb3 from "../components/HeaderWeb3";
import Footer from "../components/Footer";
import styles from "./CheckOut.module.css";
import ForQuestions from "../components/ForQuestions";

const Success: FunctionComponent = () => {
  const navigate = useNavigate();


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
              <span>Payment</span>
              <span className={styles.out}> Confirmed</span>
            </div>
        </div> 
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
              <p className={styles.tex}>
              Our team will reach out to you via Telegram within the next 24 hours to assist with the configuration of your personalized Genie. We greatly appreciate your trust in us.
                </p>   
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



export default Success;
