import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HeaderDesktop from "../components/HeaderDesktop";
import Footer from "../components/Footer";
import styles from "./Features.module.css";
import whiteGenie from "../videos/white_genie.mp4"
import { Helmet } from 'react-helmet-async';

const Features: FunctionComponent = () => {
  const navigate = useNavigate();

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

  const onFrameButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.features}>
      <Helmet>
      <title>Features | GenieBot</title>
      <meta name="description" 
      content="Our features promise an experience that transcends the generic, bringing a human touch to technology, answering questions, expanding knowledge in real-time, and delivering support that's ready when you are. Dive in and discover what sets us apart in your unique journey. " />
      </Helmet>
      <div className={styles.autolayout}>
        <HeaderDesktop
          onLogoPlaceholderContainerClick={onLogoPlaceholderContainerClick}
          onMenuItem1Click={onMenuItem1Click}
          onMenuItem2Click={onMenuItem2Click}
          onMenuItem3Click={onMenuItem3Click}
          onMenuItem11Click={onMenuItem11Click}
          onMenuItem12Click={onMenuItem12Click}
        />
        <div className={styles.mainContainer}>
          <div className={styles.div}>
            <div className={styles.featuresTextSection}>
              <div className={styles.featuretextframe}>
                <div className={styles.featurescard}>
                  <div className={styles.frameParent}>
                    <div className={styles.featuresWrapper}>
                      <div className={styles.features1}>Features</div>
                    </div>
                    <div className={styles.youreNotHereForOrdinaryWrapper}>
                      <div className={styles.youreNotHere}>
                        You're not here for ordinary, and neither are we. Our
                        features promise an experience that transcends the
                        generic, bringing a human touch to technology, answering
                        questions, expanding knowledge in real-time, and
                        delivering support that's ready when you are. Dive in
                        and discover what sets us apart in your unique journey.
                      </div>
                    </div>
                  </div>
                  <button
                    className={styles.getStartedWrapper}
                    onClick={onFrameButtonClick}
                  >
                    <div className={styles.getStarted}>Get started</div>
                  </button>
                </div>
              </div>
              <div className={styles.types}>
                <div className={styles.whiteContainer}>
                  <div className={styles.name}>
                    <div className={styles.nameChild} />
                    <div className={styles.white}>{`White `}</div>
                    <div className={styles.beta}>{`(Beta) `}</div>
                  </div>
                  <div className={styles.geniebottleContainer}>
                    <div className={styles.geniebottleWhite}>
                      <video
                        className={styles.ezgifcomCrop11}
                        autoPlay
                        muted
                        loop
                      >
                        <source src={whiteGenie} />
                      </video>
                    </div>
                  </div>
                  <div className={styles.bulletPoints}>
                    <div className={styles.bulletPointsContainer}>
                      <div className={styles.bulletPointsContainerInner}>
                        <div className={styles.frameGroup}>
                          <div className={styles.frameChild} />
                          <div
                            className={styles.interactsWithUsersInAHumaWrapper}
                          >
                            <div className={styles.interactsWithUsers}>
                              Interacts with users in a human-like manner.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.bulletPoints}>
                    <div className={styles.bulletPointsContainer}>
                      <div className={styles.bulletPointsContainerInner}>
                        <div className={styles.frameGroup}>
                          <div className={styles.frameChild} />
                          <div
                            className={styles.interactsWithUsersInAHumaWrapper}
                          >
                            <div className={styles.interactsWithUsers}>
                              Addresses all project-related questions.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.bulletPoints}>
                    <div className={styles.bulletPointsContainer}>
                      <div className={styles.bulletPointsContainerInner}>
                        <div className={styles.frameGroup}>
                          <div className={styles.frameChild} />
                          <div
                            className={styles.interactsWithUsersInAHumaWrapper}
                          >
                            <div className={styles.interactsWithUsers}>
                              Knowledge base sourced from your whitepaper,
                              website, or custom sources.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.bulletPoints}>
                    <div className={styles.bulletPointsContainer}>
                      <div className={styles.bulletPointsContainerInner}>
                        <div className={styles.frameGroup}>
                          <div className={styles.frameChild} />
                          <div
                            className={styles.interactsWithUsersInAHumaWrapper}
                          >
                            <div className={styles.interactsWithUsers}>
                              Real-time knowledge base expansion by admins.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.bulletPoints}>
                    <div className={styles.bulletPointsContainer}>
                      <div className={styles.bulletPointsContainerInner}>
                        <div className={styles.frameGroup}>
                          <div className={styles.frameChild} />
                          <div
                            className={styles.interactsWithUsersInAHumaWrapper}
                          >
                            <div className={styles.interactsWithUsers}>
                              Dedicated support from our team during office
                              hours.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.whiteContainer1}>
                  <div className={styles.name}>
                    <div className={styles.nameItem} />
                    <div className={styles.white}>Purple</div>
                    <div className={styles.beta}>{`(Coming soon) `}</div>
                  </div>
                  <div className={styles.geniebottleContainer1}>
                    <div className={styles.geniebottleWhite}>
                      <video
                        className={styles.ezgifcomCrop11}
                        autoPlay
                        muted
                        loop
                      >
                        <source src={whiteGenie} />
                      </video>
                    </div>
                  </div>
                  <div className={styles.bulletPoints}>
                    <div className={styles.bulletPointsContainer}>
                      <div className={styles.bulletPointsContainerInner}>
                        <div className={styles.frameGroup}>
                          <div className={styles.frameChild} />
                          <div
                            className={styles.interactsWithUsersInAHumaWrapper}
                          >
                            <div className={styles.interactsWithUsers}>
                              Interacts with users in a human-like manner.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.bulletPoints}>
                    <div className={styles.bulletPointsContainer}>
                      <div className={styles.bulletPointsContainerInner}>
                        <div className={styles.frameGroup}>
                          <div className={styles.frameChild} />
                          <div
                            className={styles.interactsWithUsersInAHumaWrapper}
                          >
                            <div className={styles.interactsWithUsers}>
                              Addresses all project-related questions.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.bulletPoints}>
                    <div className={styles.bulletPointsContainer}>
                      <div className={styles.bulletPointsContainerInner}>
                        <div className={styles.frameGroup}>
                          <div className={styles.frameChild} />
                          <div
                            className={styles.interactsWithUsersInAHumaWrapper}
                          >
                            <div className={styles.interactsWithUsers}>
                              Knowledge base sourced from your whitepaper,
                              website, or custom sources.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.bulletPoints}>
                    <div className={styles.bulletPointsContainer}>
                      <div className={styles.bulletPointsContainerInner}>
                        <div className={styles.frameGroup}>
                          <div className={styles.frameChild} />
                          <div
                            className={styles.interactsWithUsersInAHumaWrapper}
                          >
                            <div className={styles.interactsWithUsers}>
                              Real-time knowledge base expansion by admins.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.bulletPoints}>
                    <div className={styles.bulletPointsContainer}>
                      <div className={styles.bulletPointsContainerInner}>
                        <div className={styles.frameGroup}>
                          <div className={styles.frameChild} />
                          <div
                            className={styles.interactsWithUsersInAHumaWrapper}
                          >
                            <div className={styles.interactsWithUsers}>
                              Dedicated support from our team during office
                              hours.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.bulletPoints}>
                    <div className={styles.bulletPointsContainer}>
                      <div className={styles.bulletPointsContainerInner}>
                        <div className={styles.frameGroup}>
                          <div className={styles.frameChild} />
                          <div
                            className={styles.interactsWithUsersInAHumaWrapper}
                          >
                            <div className={styles.interactsWithUsers}>
                              Sync with social media accounts for real time
                              knowledge base expansion
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.bulletPoints}>
                    <div className={styles.bulletPointsContainer}>
                      <div className={styles.bulletPointsContainerInner}>
                        <div className={styles.frameGroup}>
                          <div className={styles.frameChild} />
                          <div
                            className={styles.interactsWithUsersInAHumaWrapper}
                          >
                            <div className={styles.interactsWithUsers}>
                              Aware of real time blockchain data related to your
                              project/token.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.featuresTextSmall}>
                <div className={styles.featurescard}>
                  <div className={styles.frameParent}>
                    <div className={styles.featuresWrapper}>
                      <div className={styles.features1}>Features</div>
                    </div>
                    <div className={styles.youreNotHereForOrdinaryWrapper}>
                      <div className={styles.youreNotHere}>
                        You're not here for ordinary, and neither are we. Our
                        features promise an experience that transcends the
                        generic, bringing a human touch to technology, answering
                        questions, expanding knowledge in real-time, and
                        delivering support that's ready when you are. Dive in
                        and discover what sets us apart in your unique journey.
                      </div>
                    </div>
                  </div>
                  <button
                    className={styles.getStartedWrapper}
                    onClick={onFrameButton1Click}
                  >
                    <div className={styles.getStarted}>Get started</div>
                  </button>
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

export default Features;
