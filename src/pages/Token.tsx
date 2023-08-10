import { FunctionComponent, useCallback, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import HeaderDesktop from "../components/HeaderDesktop";
import Footer from "../components/Footer";
import styles from "./Token.module.css";
import coin from "../videos/coin.mp4"
import { useSpring, animated } from '@react-spring/web';
import { Helmet } from 'react-helmet-async';

interface FadeInBlurProps {
  children: ReactNode;
}

const FadeInBlur: React.FC<FadeInBlurProps> = ({ children }) => {
  const animationStyles = useSpring({
    from: { opacity: 0, filter: 'blur(10px)' },
    to: { opacity: 1, filter: 'blur(0px)' },
    config: { duration: 1500 },
  });

  return <animated.div style={animationStyles}>{children}</animated.div>;
};

const Token: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogoPlaceholderContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMenuItem1Click = useCallback(() => {
    navigate("/token");
  }, [navigate]);
  

  const onBuyClick = useCallback(() => {
    window.open('https://app.uniswap.org/#/swap?=0x56978e609f2cab06f77c5c8fd75166fcd8f09bd8');
  }, [navigate]);

  const onTokenomicsClick = useCallback(() => {
    window.open('https://geniebot.gitbook.io/geniebot-whitepaper/genietoken/tokenomics');
  }, [navigate]);

  const onMenuItem2Click = useCallback(() => {
    window.open("https://geniebot.gitbook.io/geniebot-whitepaper");
  }, []);

  const onMenuItem3Click = useCallback(() => {
    navigate("/features");
  }, [navigate]);

  const onMenuItem11Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onMenuItem12Click = useCallback(() => {
    navigate("/login");
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
    <div className={styles.token}>
      <Helmet>
      <title>Token | GenieBot</title>
      <meta name="description" 
      content="Introducing $GENIE, the lifeblood of our platform. This token isn't just a currency—it's a gateway to participating in our ecosystem's profit sharing. " />
      </Helmet>
      <HeaderDesktop
        onLogoPlaceholderContainerClick={onLogoPlaceholderContainerClick}
        onMenuItem1Click={onMenuItem1Click}
        onMenuItem2Click={onMenuItem2Click}
        onMenuItem3Click={onMenuItem3Click}
        onMenuItem11Click={onMenuItem11Click}
        onMenuItem12Click={onMenuItem12Click}
      />
      <div className={styles.geniemobile}>
        <video className={styles.video} autoPlay muted loop playsInline>
          <source src={coin} />
        </video>
        <div className={styles.tokenmobilecontent}>
          <div className={styles.content}>
            <div className={styles.genie}>
              <span>$</span>
              <span className={styles.genie1}>Genie</span>
            </div>
            <p className={styles.introducingGenieThe}>
              Introducing $GENIE, the lifeblood of our platform. This token
              isn't just a currency—it's a gateway to participating in our
              ecosystem's profit sharing. By staking $GENIE, you're stepping
              into a realm of potential rewards. We invite you to discover more
              about this powerful token in our detailed whitepaper. Embrace
              $GENIE, and unlock a world of opportunities.
            </p>
          </div>
          <div className={styles.buttons}>
            <button className={styles.getStartedButton}>
              <div className={styles.tokenomics}>Tokenomics</div>
            </button>
            <button className={styles.buyButton} onClick={onBuyClick}>
             <div className={styles.buy}>Buy</div>
           </button>
          </div>
        </div>
      </div>
      <div className={styles.genieidk}>
        <div className={styles.tokentabletcontainer}>
          <div className={styles.videocontainer}>
            <video className={styles.video1} autoPlay muted loop playsInline>
              <source src={coin} />
            </video>
          </div>
          <div className={styles.yourGenieInABot}>
            <div className={styles.content}>
              <h1 className={styles.genie2}>
                <span>$</span>
                <span className={styles.genie1}>Genie</span>
              </h1>
              <p className={styles.introducingGenieThe1}>
                Introducing $GENIE, the lifeblood of our platform. This token
                isn't just a currency—it's a gateway to participating in our
                ecosystem's profit sharing. By staking $GENIE, you're stepping
                into a realm of potential rewards. We invite you to discover
                more about this powerful token in our detailed whitepaper.
                Embrace $GENIE, and unlock a world of opportunities.
              </p>
            </div>
            <div className={styles.getStartedButtonParent}>
              <button className={styles.getStartedButton} onClick={onTokenomicsClick}>
                <div className={styles.tokenomics}>Tokenomics</div>
              </button>
              <button className={styles.buyButton} onClick={onBuyClick}>
               <div className={styles.buy}>Buy</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.yourGenieInABot1}>
            <div className={styles.content}>
              <h1 className={styles.genie2}>
                <span>$</span>
                <span className={styles.genie1}>Genie</span>
              </h1>
              <p className={styles.introducingGenieThe2}>
                Introducing $GENIE, the lifeblood of our platform. This token
                isn't just a currency—it's a gateway to participating in our
                ecosystem's profit sharing. By staking $GENIE, you're stepping
                into a realm of potential rewards. We invite you to discover
                more about this powerful token in our detailed whitepaper.
                Embrace $GENIE, and unlock a world of opportunities.
              </p>
            </div>
            <div className={styles.getStartedButtonParent}>
             <button className={styles.getStartedButton} onClick={onTokenomicsClick}>
                <div className={styles.tokenomics}>Tokenomics</div>
              </button>
              <button className={styles.buyButton} onClick={onBuyClick}>
                <div className={styles.buy2}>Buy</div>
              </button>
            </div>
          </div>
          <div className={styles.videocontainer1}>
            <FadeInBlur>
              <video className={styles.video2} autoPlay muted loop playsInline>
                <source src={coin} />
              </video>
            </FadeInBlur>
          </div>
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
  );
};

export default Token;
