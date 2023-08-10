import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Setup.module.css";
import HeaderWeb3 from "../components/HeaderWeb3";
import Footer from "../components/Footer";

const SetUp: FunctionComponent = () => {
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
    navigate("/");
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
    <div className={styles.setUp}>
      <div className={styles.autolayout}>
      <HeaderWeb3
          onLogo31Click={onLogo31Click}
          onMenuItemClick={onMenuItemClick}
          onMenuItem1Click={onMenuItem1Click}
          onMenuItem2Click={onMenuItem2Click}
        />
        <div className={styles.frameParent}>
          <div className={styles.setUpYourGenieParent}>
            <div className={styles.setUpYourContainer}>
              <span>{`Set up `}</span>
              <span className={styles.yourGenie}>your genie</span>
            </div>
            <div className={styles.paymentConfirmedLets}>
              Payment confirmed! Let's begin customizing your personal genie.
              Please provide the necessary information below, and we'll proceed
              with setting up the bot for you!
            </div>
            <div className={styles.pngwing1Parent}>
              <img
                className={styles.pngwing1Icon}
                alt=""
                src="/pngwing-1@2x.png"
              />
              <div className={styles.enterTheMain}>
                Enter the main links where we can find all the necessary
                information. Don't worry about adding internal links
                separately—we'll take care of that automatically.
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameGroup}>
                <div className={styles.frameContainer}>
                  <div className={styles.websiteLinkWrapper}>
                    <div className={styles.websiteLink}>Website link</div>
                  </div>
                  <input
                    className={styles.frameChild}
                    type="text"
                    placeholder="Enter your website URL"
                    maxLength={50}
                  />
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.websiteLinkWrapper}>
                    <div className={styles.websiteLink}>
                      Custom link 1 (e.g. whitepaper, docs etc.)
                    </div>
                  </div>
                  <input
                    className={styles.frameChild}
                    type="text"
                    placeholder="Enter custom URL"
                    maxLength={50}
                  />
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.websiteLinkWrapper}>
                    <div className={styles.websiteLink}>
                      Custom link 2 (e.g. whitepaper, docs etc.)
                    </div>
                  </div>
                  <input
                    className={styles.frameChild}
                    type="text"
                    placeholder="Enter custom URL"
                    maxLength={50}
                  />
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.websiteLinkWrapper}>
                    <div
                      className={styles.websiteLink}
                    >{`Telegram username (exclusive admin control) `}</div>
                  </div>
                  <input
                    className={styles.frameChild}
                    type="text"
                    placeholder="Enter telegram username"
                    maxLength={50}
                  />
                </div>
                <div className={styles.frameWrapper1}>
                  <div className={styles.afterCompletingTheMainConfWrapper}>
                    <div className={styles.afterCompletingThe}>
                      After completing the main configuration, you can manually
                      add offline sources or custom question-answer pairs to
                      further enhance the knowledge base.
                    </div>
                  </div>
                </div>
                <button className={styles.submitWrapper}>
                  <div className={styles.submit}>Submit</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.forQuestions}>
            <div className={styles.forQuestionWrapper}>
              <div className={styles.forQuestion}>
                <div className={styles.frameParent3}>
                  <div className={styles.frameParent4}>
                    <div className={styles.frameWrapper2}>
                      <div className={styles.forQuestionsWrapper}>
                        <div className={styles.forQuestions1}>
                          <span>For</span>
                          <span className={styles.yourGenie}> questions</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.pleaseContactGeniebotinfoOWrapper}>
                      <div className={styles.pleaseContactGeniebotinfo}>
                        Please contact @geniebotinfo on Telegram. We will be
                        happy to answer your questions or enquiries.
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

export default SetUp;
