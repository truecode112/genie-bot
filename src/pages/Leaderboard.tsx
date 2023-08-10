import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Leaderboard.module.css";
import HeaderDesktop from "../components/HeaderDesktop";
import Footer from "../components/Footer";
const Leaderboard: FunctionComponent = () => {
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
    <div className={styles.checkOut}>
      <div className={styles.autolayout}>
      <HeaderDesktop
          onLogoPlaceholderContainerClick={onLogoPlaceholderContainerClick}
          onMenuItem1Click={onMenuItem1Click}
          onMenuItem2Click={onMenuItem2Click}
          onMenuItem3Click={onMenuItem3Click}
          onMenuItem11Click={onMenuItem11Click}
          onMenuItem12Click={onMenuItem12Click}
        />
        <div className={styles.frame}>
          <div className={styles.frameParent}>
            <div className={styles.leaderboardParent}>
              <div className={styles.leaderboard}>
                <span>Leader</span>
                <span className={styles.board}>board</span>
              </div>
              <div className={styles.theReferralContestWillRunWrapper}>
                <div className={styles.theReferralContest}>
                  The referral contest will run until we finish beta testing.
                  The goal is to onboard as many (quality) groups as possible.
                  Every valid referral earns you $100. If you make the top 3,
                  one of the following prizes will come on top. For more
                  information, see the <a href="https://geniebot.app/rules">rules</a>. To join, DM <a href="https://t.me/Oxelyy">Oxelyy</a>.
                </div>
              </div>
            </div>
            <div className={styles.prized}>
              <div className={styles.stPlace}>
                <div className={styles.stPlaceAuto}>
                  <div className={styles.ndPlace}>1st place</div>
                </div>
                <div className={styles.prize}>
                  <b className={styles.eth}>
                    <span>2</span>
                    <span className={styles.eth1}>{` ETH `}</span>
                  </b>
                </div>
              </div>
              <div className={styles.stPlace}>
                <div className={styles.stPlaceAuto}>
                  <div className={styles.ndPlace}>2nd place</div>
                </div>
                <div className={styles.prize}>
                  <b className={styles.eth}>
                    <span>1</span>
                    <span className={styles.eth1}>{` ETH `}</span>
                  </b>
                </div>
              </div>
              <div className={styles.stPlace}>
                <div className={styles.stPlaceAuto}>
                  <div className={styles.ndPlace}>3rd place</div>
                </div>
                <div className={styles.prize}>
                  <b className={styles.eth}>
                    <span>0.5</span>
                    <span className={styles.eth1}>{` ETH `}</span>
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.leadersContainerParent}>
            <div className={styles.leadersContainer}>
              <div className={styles.titles}>
                <div className={styles.titlesChild} />
                <div className={styles.field}>
                  <b className={styles.eth}>{`Referrer `}</b>
                </div>
                <div className={styles.field1}>
                  <b className={styles.eth}>Onboarded</b>
                </div>
                <div className={styles.earnedWrapper}>
                  <b className={styles.eth}>$ Earned</b>
                </div>
              </div>
            </div>
            <div className={styles.titles}>
              <div className={styles.wrapper}>
                <div className={styles.div}>1</div>
              </div>
              <div className={styles.field2}>
                <div className={styles.ndPlace}>0xely</div>
              </div>
              <div className={styles.field3}>
                <div className={styles.ndPlace}>5</div>
              </div>
              <div className={styles.container}>
                <div className={styles.ndPlace}>$500</div>
              </div>
            </div>
            <div className={styles.titles}>
              <div className={styles.wrapper}>
                <div className={styles.div}>2</div>
              </div>
              <div className={styles.field2}>
                <div className={styles.ndPlace}>Whalesmith</div>
              </div>
              <div className={styles.field3}>
                <div className={styles.ndPlace}>2</div>
              </div>
              <div className={styles.container}>
                <div className={styles.ndPlace}>$200</div>
              </div>
            </div>
            <div className={styles.titles}>
              <div className={styles.wrapper}>
                <div className={styles.div}>3</div>
              </div>
              <div className={styles.field2}>
                <div className={styles.ndPlace}>ballrstevej</div>
              </div>
              <div className={styles.field3}>
                <div className={styles.ndPlace}>1</div>
              </div>
              <div className={styles.container}>
                <div className={styles.ndPlace}>$100</div>
              </div>
            </div>
            <div className={styles.titles}>
              <div className={styles.wrapper}>
                <div className={styles.div}>4</div>
              </div>
              <div className={styles.field2}>
                <div className={styles.ndPlace}>sertrippy</div>
              </div>
              <div className={styles.field3}>
                <div className={styles.ndPlace}>1</div>
              </div>
              <div className={styles.container}>
                <div className={styles.ndPlace}>$100</div>
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

export default Leaderboard;
