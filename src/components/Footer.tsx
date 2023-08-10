import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./Footer.module.css";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

type FooterType = {
  /** Style props */
  propOverflow?: Property.Overflow;
  propFlexShrink?: Property.FlexShrink;
  propOverflow1?: Property.Overflow;
  propFlexShrink1?: Property.FlexShrink;

  /** Action props */
  onHomeClick?: () => void;
  onTokenClick?: () => void;
  onTermsClick?: () => void;
  onWhitepaperClick?: () => void;
  onGetStartedClick?: () => void;
  onRegisterClick?: () => void;
  onFeaturesClick?: () => void;
};


const Footer: FunctionComponent<FooterType> = ({
  propOverflow,
  propFlexShrink,
  propOverflow1,
  propFlexShrink1,
  onHomeClick,
  onTokenClick,
  onTermsClick,
  onWhitepaperClick,
  onGetStartedClick,
  onRegisterClick,
  onFeaturesClick,
}) => {
  const navigate = useNavigate();

  const TelegramClick = useCallback(() => {
    window.open("https://t.me/geniebotportal");
  }, []);
  
  const TwitterClick = useCallback(() => {
    window.open("https://twitter.com/geniebotapp");
  }, []);
  
  const UniClick = useCallback(() => {
    window.open("https://app.uniswap.org/#/swap?=0x56978e609f2cab06f77c5c8fd75166fcd8f09bd8");
  },[] );

  const frameButton1Style: CSS.Properties = useMemo(() => {
    return {
      overflow: propOverflow,
      flexShrink: propFlexShrink,
    };
  }, [propOverflow, propFlexShrink]);

  const frameButton2Style: CSS.Properties = useMemo(() => {
    return {
      overflow: propOverflow1,
      flexShrink: propFlexShrink1,
    };
  }, [propOverflow1, propFlexShrink1]);

  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContainerInner}>
          <div className={styles.vectorWrapper}>
            <img className={styles.frameChild} alt="" />
          </div>
        </div>
        <div className={styles.links}>
          <div className={styles.linksContainer}>
            <div className={styles.cont}>
              <div className={styles.columnlinks1}>
                <div className={styles.linkframe1}>
                  <button className={styles.home} onClick={onHomeClick}>
                    Home
                  </button>
                </div>
                <div className={styles.linkframe1}>
                  <button className={styles.home} onClick={onTokenClick}>
                    Token
                  </button>
                </div>
              </div>
              <div className={styles.columnlinks2}>
                <div className={styles.linkframe3}>
                  <button
                    className={styles.terms}
                    onClick={onTermsClick}
                  >{`Terms `}</button>
                </div>
                <div className={styles.linkframe4}>
                  <button className={styles.home} onClick={onWhitepaperClick}>
                    Whitepaper
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.columnlinks3}>
              <div className={styles.linkframe5}>
                <button
                  className={styles.getStarted}
                  onClick={onGetStartedClick}
                >
                  Get started
                </button>
                <button className={styles.register} onClick={onRegisterClick}>
                  Register
                </button>
              </div>
              <div className={styles.linkframe6}>
                <button className={styles.home} onClick={onFeaturesClick}>
                  Features
                </button>
              </div>
            </div>
          </div>
          <div className={styles.socialMediaLinksParent}>
            <div className={styles.socialMediaLinks}>
              <button
                className={styles.telegramWrapper}
                style={frameButton1Style}
                onClick={TelegramClick}
              >
                <img
                  className={styles.telegramIcon}
                  alt=""
                  src="/telegram.svg"
                />
              </button>
              <button className={styles.twitterWrapper} onClick={TwitterClick}>
                <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
              </button>
              <button
                className={styles.uniswapLogoBlack1Wrapper}
                style={frameButton2Style}
                onClick={UniClick}
              >
                <img
                  className={styles.uniswapLogoBlack1Icon}
                  alt=""
                  src="/uniswaplogoblack-1@2x.png"
                />
              </button>
            </div>
            <div className={styles.geniebotWrapper}>
              <div className={styles.geniebot}>©2023 Geniebot</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
