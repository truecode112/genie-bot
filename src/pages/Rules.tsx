import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Rules.module.css";
import HeaderDesktop from "../components/HeaderDesktop";
import Footer from "../components/Footer";

const Rules: FunctionComponent = () => {
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
          <div className={styles.rulesParent}>
            <div className={styles.rules}>Rules</div>
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper}>
                <div className={styles.frameChild} />
              </div>
              <div
                className={styles.theReferralContest}
              >{`The referral contest is aimed at onboarding quality projects to use GenieBot in their telegram. `}</div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper}>
                <div className={styles.frameChild} />
              </div>
              <div
                className={styles.theReferralContest}
              >{`For every project that starts using GenieBot in their Telegram group you get $100. `}</div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper}>
                <div className={styles.frameChild} />
              </div>
              <div className={styles.theReferralContest}>
                Do not excessively spam project groups about GenieBot.
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper}>
                <div className={styles.frameChild} />
              </div>
              <div
                className={styles.theReferralContest}
              >{`The rewards will be payed once the GenieBot beta is finished. The exact date is still TBA. `}</div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper}>
                <div className={styles.frameChild} />
              </div>
              <div className={styles.theReferralContest}>
                The extra prizes below will only be paid out if you are still in
                the top 3 when the contest ends
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper}>
                <div className={styles.frameChild} />
              </div>
              <div className={styles.theReferralContest}>
                The only official way to sign up for the contest is by
                contacting @Oxelyy through telegram.
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
  );
};

export default Rules;
