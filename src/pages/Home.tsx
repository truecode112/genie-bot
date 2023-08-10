import { FunctionComponent, useCallback, ReactNode, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import HeaderDesktop from "../components/HeaderDesktop";
import HeaderWeb3 from "../components/HeaderWeb3";
import StepsContainer from "../components/StepsContainer";
import ForQuestions from "../components/ForQuestions";
import Footer from "../components/Footer";
import styles from "./Home.module.css";
import genieBottle from "../videos/genie_bottle.mp4"
import phone from "../videos/phone.mp4";
import purpleBox from "../videos/purple_box.mp4";
import { useAddress } from "@thirdweb-dev/react";
import { animated, useSpring } from '@react-spring/web';
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
const Home: FunctionComponent = () => {

  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef1.current && videoRef2.current) {
      videoRef1.current.addEventListener('canplaythrough', () => videoRef1.current!.play());
      videoRef2.current.addEventListener('canplaythrough', () => videoRef2.current!.play());
    }

    // Clean up function
    return () => {
      if (videoRef1.current && videoRef2.current) {
        videoRef1.current.removeEventListener('canplaythrough', () => videoRef1.current!.play());
        videoRef2.current.removeEventListener('canplaythrough', () => videoRef2.current!.play());
      }
    }
  }, []);

  const navigate = useNavigate();

  const address = useAddress();

  const onLogoPlaceholderContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMenuItem1Click = useCallback(() => {
    navigate("/token");
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

  const onGetStartedButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onAtomsiconscoloredsharpteleClick = useCallback(() => {
    window.open("https://t.me/geniebotportal");
  }, []);

  const onGetStartedButton1Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onAtomsiconscoloredsharptele1Click = useCallback(() => {
    window.open("https://t.me/geniebotportal");
  }, []);

  const onLogo31Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMenuItemClick = useCallback(() => {
    navigate("/token");
  }, [navigate]);
  

  return (
    <div className={styles.home}>
      <Helmet>
      <title>GenieBot | Your genie in a bot</title>
      <meta name="description" 
      content="Your genie in a bot. An AI-driven Telegram bot that effortlessly tackles project questions, updates its knowledge base with admin input, and smartly adapts to your whitepaper or website content. " />
      </Helmet>
        <HeaderDesktop
          onLogoPlaceholderContainerClick={onLogoPlaceholderContainerClick}
          onMenuItem1Click={onMenuItem1Click}
          onMenuItem2Click={onMenuItem2Click}
          onMenuItem3Click={onMenuItem3Click}
          onMenuItem11Click={onMenuItem11Click}
          onMenuItem12Click={onMenuItem12Click}
        />
      <div className={styles.autolayout}>
        <div className={styles.homeidkmobile}>
          <div className={styles.videosection}>
            <div className={styles.videocontainer}>
            <FadeInBlur>
              <video className={styles.wrapper} ref={videoRef1} autoPlay muted loop playsInline preload="auto">
                <source src={genieBottle} type="video/mp4" />
              </video>
              <video className={styles.container} ref={videoRef2} autoPlay muted loop playsInline preload="auto">
                <source src={phone} type="video/mp4" />
              </video>
            </FadeInBlur>
            </div>
          </div>
          <div className={styles.whyGeniebotIdkmobile}>
            <h2 className={styles.yourGenieInContainer}>
              <span>{`Your `}</span>
              <span className={styles.genie}>genie</span>
              <span>{` in a `}</span>
              <span className={styles.bot}>bot</span>
            </h2>
              <div className={styles.anAiDrivenTelegramBotThatWrapper}>
                <div className={styles.anAiDrivenTelegram}>
                  An AI-driven Telegram bot that effortlessly tackles project
                  questions, updates its knowledge base with admin input, and
                  smartly adapts to your whitepaper or website content. Discover a
                  new level of convenience and efficiency in project support
                  through Telegram.
                </div>
              </div>
          </div>
          <div className={styles.homeidkmobilecontainer}>
              <button
                className={styles.getStartedButton}
                onClick={onGetStartedButtonClick}
              >
                <div className={styles.getStarted}>Get started</div>
              </button>
              <button
                className={styles.atomsiconscoloredsharptele}
                onClick={onAtomsiconscoloredsharpteleClick}
              >
                <img className={styles.bgIcon} alt="" src="/bg.svg" />
                <img
                  className={styles.telegramIcon}
                  alt=""
                  src="/telegram1.svg"
                />
              </button>
          </div>
        </div>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.yourGenieInABot}>
              <div className={styles.text}>
                <div className={styles.yourGenieInContainer1}>
                  <span>{`Your `}</span>
                  <span className={styles.genie}>genie</span>
                  <span>{` in a `}</span>
                  <span className={styles.bot}>bot</span>
                </div>
                  <div className={styles.anAiDrivenTelegram1}>
                    An AI-driven Telegram bot that effortlessly tackles project
                    questions, updates its knowledge base with admin input, and
                    smartly adapts to your whitepaper or website content. Discover
                    a new level of convenience and efficiency in project support
                    through Telegram.
                  </div>
              </div>
              <div className={styles.homeidkmobilecontainer}>
                <button
                  className={styles.getStartedButton}
                  onClick={onGetStartedButton1Click}
                >
                  <div className={styles.getStarted}>Get started</div>
                </button>
                <button
                  className={styles.atomsiconscoloredsharptele}
                  onClick={onAtomsiconscoloredsharptele1Click}
                >
                  <img className={styles.bgIcon} alt="" src="/bg.svg" />
                  <img
                    className={styles.telegramIcon}
                    alt=""
                    src="/telegram1.svg"
                  />
                </button>
              </div>
            </div>
            <div className={styles.videoContainer}>
              <FadeInBlur>
                <div className={styles.homevideo}>
                  <video className={styles.frame} autoPlay muted loop playsInline>
                    <source src={phone} type="video/mp4"/>
                  </video>
                  <video className={styles.frameVideo} autoPlay muted loop playsInline>
                    <source src={genieBottle} type="video/mp4" />
                  </video>
                </div>
              </FadeInBlur>
            </div>
          </div>
        </div>
        <div className={styles.whyGeniebotIdkmobile1}>
          <div className={styles.cubeContainer}>
            <video
              className={styles.schermafbeelding2023051819}
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={purpleBox} type="video/mp4" />
            </video>
          </div>
          <FadeInBlur>
            <h2 className={styles.whyGeniebot}>
              <span>Why</span>
              <span className={styles.geniebot}> Geniebot?</span>
            </h2>
          </FadeInBlur>
          <div className={styles.the247NatureOfTheCryptoWrapper}>
            <div className={styles.the247NatureContainer}>
              <p className={styles.the247Nature}>
                The 24/7 nature of the crypto community means that users may ask
                in-depth questions at any time, and moderators might not always
                know the correct answer or be available to respond. Our
                AI-powered Telegram bot offers a simple and reliable solution to
                this challenge.
              </p>
              <p className={styles.the247Nature}>&nbsp;</p>
              <p className={styles.the247Nature}>
                The bot learns all about your project and can chat with users
                just like a real person would. This means clear, friendly, and
                efficient communication for your users. The best part? While the
                bot is busy answering questions and keeping users informed,
                you're free to focus on the important tasks that move your
                project forward.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.whyGeniebot1}>
          <div className={styles.container1}>
            <div className={styles.cubeContainer1}>
              <FadeInBlur>
                <video
                  className={styles.schermafbeelding20230518191}
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={purpleBox} type="video/mp4"/>
                </video>
              </FadeInBlur>
            </div>
            <div className={styles.textSection}>
              <div className={styles.h2}>
                <span>Why</span>
                <span className={styles.geniebot}> Geniebot?</span>
              </div>
              <div className={styles.paragraph}>
                <div className={styles.the247NatureContainer1}>
                  <p className={styles.the247Nature}>
                    The 24/7 nature of the crypto community means that users may
                    ask in-depth questions at any time, and moderators might not
                    always know the correct answer or be available to respond.
                    Our AI-powered Telegram bot offers a simple and reliable
                    solution to this challenge.
                  </p>
                  <p className={styles.the247Nature}>&nbsp;</p>
                  <p className={styles.the247Nature}>
                    The bot learns all about your project and can chat with
                    users just like a real person would. This means clear,
                    friendly, and efficient communication for your users. The
                    best part? While the bot is busy answering questions and
                    keeping users informed, you're free to focus on the
                    important tasks that move your project forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.howToGetStartedIpadphone}>
          <div className={styles.howToGetStarted}>
            <div className={styles.howToGetStartedInner}>
              <div className={styles.howToGetStartedWrapper}>
                <div className={styles.howToGetContainer}>
                  <p className={styles.the247Nature}>
                    <span className={styles.genie}>How</span>
                    <span> to get started?</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.frameWrapper}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameContainer}>
                    <div className={styles.frameDiv}>
                      <div className={styles.div}>1</div>
                    </div>
                    <div className={styles.createYourAccountWrapper}>
                      <div className={styles.div}>
                        <span>Create</span>
                        <span className={styles.span}>{` `}</span>
                        <span className={styles.geniebot}>your account</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper1}>
                    <button className={styles.connectWalletWrapper}>
                      <div className={styles.connectWallet}>Connect wallet</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.frameParent1}>
                  <div className={styles.frameContainer}>
                    <div className={styles.wrapper1}>
                      <div className={styles.div}>2</div>
                    </div>
                    <div className={styles.chooseYourGenieWrapper}>
                      <div className={styles.div}>
                        <span>Choose</span>
                        <span className={styles.geniebot}> your genie</span>
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
                    <div className={styles.wrapper2}>
                      <div className={styles.div}>3</div>
                    </div>
                    <div className={styles.createYourAccountWrapper}>
                      <div className={styles.div}>
                        <span>Configure</span>
                        <span className={styles.span}>{` `}</span>
                        <span className={styles.geniebot}>your bot</span>
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
                <div className={styles.frameWrapper4}>
                  <div className={styles.forQuestionsWrapper}>
                    <div className={styles.div}>
                      <span>For</span>
                      <span className={styles.genie}> questions</span>
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
                  src="/atomsiconsblackcurveedgetelegram3.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.howToGetStarted2}>
          <div className={styles.h21}>
            <div className={styles.howToGetStartedWrapper}>
              <div className={styles.howToGetContainer1}>
                <p className={styles.the247Nature}>
                  <span className={styles.genie}>How</span>
                  <span> to get started?</span>
                </p>
              </div>
            </div>
          </div>
          <StepsContainer
            walletConnectionText="Create"
            walletConnectionStatusTex="your account"
            walletConnectionButtonTex="Get started"
            propBackgroundColor="#fff"
          />
          <ForQuestions productId="/atomsiconsblackcurveedgetelegram4.svg" />
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

export default Home;
