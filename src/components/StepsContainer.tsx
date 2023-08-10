import { FunctionComponent, useMemo, useCallback } from "react";
import CSS, { Property } from "csstype";
import styles from "./StepsContainer.module.css";
import { useNavigate } from "react-router-dom";

type StepsContainerType = {
  walletConnectionText?: string;
  walletConnectionStatusTex?: string;
  walletConnectionButtonTex?: string;

  /** Style props */
  propBackgroundColor?: Property.BackgroundColor;
};

const StepsContainer: FunctionComponent<StepsContainerType> = ({
  walletConnectionText,
  walletConnectionStatusTex,
  walletConnectionButtonTex,
  propBackgroundColor,
}) => {
  const frameButtonStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const navigate = useNavigate();

  const onGetStartedClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.wrapper}>
              <div className={styles.div}>1</div>
            </div>
            <div className={styles.connectYourWalletWrapper}>
              <div className={styles.div}>
                <span>{walletConnectionText}</span>
                <span className={styles.span}>{` `}</span>
                <span className={styles.yourWallet}>
                  {walletConnectionStatusTex}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
          <button
              className={styles.connectedWrapper}
              onClick={onGetStartedClick}
              style={frameButtonStyle}
            >
              <div className={styles.connected}>
                {walletConnectionButtonTex}
              </div>
              
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
              Choose the type and length of your Geniebot membership, enter your
              telegram handle and complete your payment on the Ethereum network.
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
            <div className={styles.weWillContact}>
              We will contact you on Telegram within 24 hours after your
              purchase to configure the bot for you. We will customize the bot
              to your needs.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsContainer;
