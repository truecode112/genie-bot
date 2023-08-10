import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MyGenie.module.css";
import HeaderWeb3 from "../components/HeaderWeb3";
import Footer from "../components/Footer";
import whiteGenie from "../videos/white_genie.mp4"

const MyGenie: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogo31Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMenuItemClick = useCallback(() => {
    navigate("/token");
  }, [navigate]);

  const onMenuItem1Click = useCallback(() => {
    window.open("https://t.me/geniebotportal");
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
    <div className={styles.dashboard}>
      <div className={styles.autolayout}>
      <HeaderWeb3
          onLogo31Click={onLogo31Click}
          onMenuItemClick={onMenuItemClick}
          onMenuItem1Click={onMenuItem1Click}
          onMenuItem2Click={onMenuItem2Click}
        />
        <div className={styles.autolayoutInner}>
          <div className={styles.myGenieParent}>
            <div className={styles.myGenie}>
              <span>My</span>
              <span className={styles.genie}> genie</span>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.frameContainer}>
                  <div className={styles.genieWhiteWrapper}>
                    <div className={styles.genieWhite}>Genie White</div>
                  </div>
                  <div className={styles.genieExpiresOnParent}>
                    <div className={styles.genieWhite}>Genie expires on:</div>
                    <div className={styles.dMYTttt}>D-M-Y TT:TT</div>
                  </div>
                  <div className={styles.genieExpiresOnParent}>
                    <div className={styles.genieWhite}>Status:</div>
                    <div className={styles.genieWhite}>
                      Installation pending
                    </div>
                  </div>
                </div>
                <div className={styles.extendMembershipWrapper}>
                  <div className={styles.genieWhite}>Extend membership</div>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.frameDiv}>
                  <video className={styles.wrapper} autoPlay muted loop>
                    <source src={whiteGenie} />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.autolayoutChild}>
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.groupsWrapper}>
                <div className={styles.genieWhite}>Groups</div>
              </div>
              <div className={styles.pleaseWhitelistTheGroupsWhWrapper}>
                <div className={styles.pleaseWhitelistThe}>
                  Please whitelist the groups where this bot is permitted to be
                  active.
                </div>
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.frameParent2}>
                  <div className={styles.activeGroupsWrapper}>
                    <div className={styles.activeGroups}>Active groups</div>
                  </div>
                  <div className={styles.groupNameParent}>
                    <div className={styles.activeGroups}>group name</div>
                    <img
                      className={styles.hamburgerMenu3Icon}
                      alt=""
                      src="/hamburger-menu3.svg"
                    />
                  </div>
                </div>
                <div className={styles.frameWrapper1}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.addNewGroupChatsWrapper}>
                      <div className={styles.genieWhite}>
                        Add new group chats
                      </div>
                    </div>
                    <div className={styles.genieWhiteWrapper}>
                      <input
                        className={styles.frameChild}
                        type="text"
                        placeholder="Enter project name"
                        maxLength={50}
                      />
                      <button className={styles.addWrapper}>
                        <div className={styles.add}>Add</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.groupsWrapper}>
                <div className={styles.genieWhite}>Admins</div>
              </div>
              <div className={styles.pleaseWhitelistTheGroupsWhWrapper}>
                <div className={styles.pleaseWhitelistThe1}>
                  Please whitelist the admins who are permitted to add/remove
                  question-answer pairs
                </div>
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.frameParent2}>
                  <div className={styles.activeGroupsWrapper}>
                    <div className={styles.activeGroups}>Active admins</div>
                  </div>
                  <div className={styles.groupNameParent}>
                    <div className={styles.activeGroups}>admin name</div>
                    <img
                      className={styles.hamburgerMenu3Icon}
                      alt=""
                      src="/hamburger-menu3.svg"
                    />
                  </div>
                </div>
                <div className={styles.frameWrapper1}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.addNewGroupChatsWrapper}>
                      <div className={styles.genieWhite}>Add new admin</div>
                    </div>
                    <div className={styles.genieWhiteWrapper}>
                      <input
                        className={styles.frameChild}
                        type="text"
                        placeholder="Enter project name"
                        maxLength={50}
                      />
                      <button className={styles.addWrapper}>
                        <div className={styles.add}>Add</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default MyGenie;
