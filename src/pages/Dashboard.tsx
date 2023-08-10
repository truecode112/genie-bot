import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";
import HeaderDesktop from "../components/HeaderDesktop";
import Footer from "../components/Footer";
const Dashboard: FunctionComponent = () => {
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

  const onFrameIcon1Click = useCallback(() => {
    window.open("https://t.me/WAGMIOfficilGroup");
  }, []);

  const onFrameIcon3Click = useCallback(() => {
    window.open("https://t.me/traceaiportal");
  }, []);

  const onFrameIcon5Click = useCallback(() => {
    window.open("https://t.me/BazedGamesPortal");
  }, []);

  const onFrameIcon7Click = useCallback(() => {
    window.open("https://t.me/ZeroXFreelance");
  }, []);

  const onFrameIcon9Click = useCallback(() => {
    window.open("https://t.me/aeriecoin");
  }, []);

  const onFrameIcon11Click = useCallback(() => {
    window.open("https://t.me/ArchiveAIERC");
  }, []);

  const onFrameIcon13Click = useCallback(() => {
    window.open("https://t.me/MoetaERC");
  }, []);

  const onFrameIcon15Click = useCallback(() => {
    window.open("https://t.me/YeetZeJeet");
  }, []);

  const onFrameIcon17Click = useCallback(() => {
    window.open("https://t.me/lendrnetwork");
  }, []);

  const onFrameIcon19Click = useCallback(() => {
    window.open("https://t.me/MechXofficial");
  }, []);

  const onFrameIcon21Click = useCallback(() => {
    window.open("https://t.me/Portal_Liquishield");
  }, []);

  const onFrameIcon23Click = useCallback(() => {
    window.open("https://t.me/cavedaoportal");
  }, []);

  const onFrameIcon25Click = useCallback(() => {
    window.open("https://t.me/ChampzERC");
  }, []);

  const onFrameIcon26Click = useCallback(() => {
    window.open("https://t.me/rewardz_network");
  }, []);


  return (
    <div className={styles.dashboard}>
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
          <div className={styles.frameInner}>
            <div className={styles.activeGroupsWrapper}>
              <div className={styles.activeGroups}>
                <span>{`Active `}</span>
                <span className={styles.groups}>Groups</span>
              </div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.prizedWrapper}>
                <div className={styles.prized}>
                  <div className={styles.stPlace}>
                    <div className={styles.stPlaceAuto}>
                      <div className={styles.telegram}>Telegram</div>
                    </div>
                    <div className={styles.prize}>
                      <b className={styles.b}>{`14 `}</b>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
            <div className={styles.participant}>
              <img
                className={styles.participantChild}
                alt=""
                src="/rayn.png"
              />
              <div className={styles.field}>
                <div className={styles.telegram}>RAYN</div>
              </div>
              <img
                className={styles.participantItem}
                alt=""
                src="/frame-165@2x.png"
                onClick={onFrameIcon26Click}
              />
            </div>
            <div className={styles.participant}>
              <img
                className={styles.participantChild}
                alt=""
                src="/frame-166@2x.png"
              />
              <div className={styles.field}>
                <div className={styles.telegram}>WAGMI Games</div>
              </div>
              <img
                className={styles.participantItem}
                alt=""
                src="/frame-165@2x.png"
                onClick={onFrameIcon1Click}
              />
            </div>
            <div className={styles.participant}>
              <img
                className={styles.participantChild}
                alt=""
                src="/frame-1661@2x.png"
              />
              <div className={styles.field}>
                <div className={styles.telegram}>TraceAI</div>
              </div>
              <img
                className={styles.participantItem}
                alt=""
                src="/frame-165@2x.png"
                onClick={onFrameIcon3Click}
              />
            </div>
            <div className={styles.participant}>
              <img
                className={styles.participantChild}
                alt=""
                src="/frame-1662@2x.png"
              />
              <div className={styles.field}>
                <div className={styles.telegram}>Bazed Games</div>
              </div>
              <img
                className={styles.participantItem}
                alt=""
                src="/frame-165@2x.png"
                onClick={onFrameIcon5Click}
              />
            </div>
            <div className={styles.participant}>
              <img
                className={styles.participantChild}
                alt=""
                src="/frame-1663@2x.png"
              />
              <div className={styles.field}>
                <div className={styles.telegram}>0xFreelance</div>
              </div>
              <img
                className={styles.participantItem}
                alt=""
                src="/frame-165@2x.png"
                onClick={onFrameIcon7Click}
              />
            </div>
            <div className={styles.participant}>
              <img
                className={styles.participantChild}
                alt=""
                src="/frame-1664@2x.png"
              />
              <div className={styles.field}>
                <div className={styles.telegram}>AERIE</div>
              </div>
              <img
                className={styles.participantItem}
                alt=""
                src="/frame-165@2x.png"
                onClick={onFrameIcon9Click}
              />
            </div>
            <div className={styles.participant}>
              <img
                className={styles.participantChild}
                alt=""
                src="/frame-1665@2x.png"
              />
              <div className={styles.field}>
                <div className={styles.telegram}>ARCAI</div>
              </div>
              <img
                className={styles.participantItem}
                alt=""
                src="/frame-165@2x.png"
                onClick={onFrameIcon11Click}
              />
            </div>
            <div className={styles.participant}>
              <img
                className={styles.participantChild}
                alt=""
                src="/frame-1666@2x.png"
              />
              <div className={styles.field}>
                <div className={styles.telegram}>MOETA</div>
              </div>
              <img
                className={styles.participantItem}
                alt=""
                src="/frame-165@2x.png"
                onClick={onFrameIcon13Click}
              />
            </div>
            <div className={styles.participant}>
              <img
                className={styles.participantChild}
                alt=""
                src="/frame-1667@2x.png"
              />
              <div className={styles.field}>
                <div className={styles.telegram}>Yeet Ze Jeet</div>
              </div>
              <img
                className={styles.participantItem}
                alt=""
                src="/frame-165@2x.png"
                onClick={onFrameIcon15Click}
              />
            </div>
            <div className={styles.participant}>
              <img
                className={styles.participantChild}
                alt=""
                src="/frame-1668@2x.png"
              />
              <div className={styles.field}>
                <div className={styles.telegram}>Lendr</div>
              </div>
              <img
                className={styles.participantItem}
                alt=""
                src="/frame-165@2x.png"
                onClick={onFrameIcon17Click}
              />
            </div>
            <div className={styles.participant}>
              <img
                className={styles.participantChild}
                alt=""
                src="/frame-1669@2x.png"
              />
              <div className={styles.field}>
                <div className={styles.telegram}>MechX</div>
              </div>
              <img
                className={styles.participantItem}
                alt=""
                src="/frame-165@2x.png"
                onClick={onFrameIcon19Click}
              />
            </div>
            <div className={styles.participant}>
              <img
                className={styles.participantChild}
                alt=""
                src="/frame-16610@2x.png"
              />
              <div className={styles.field}>
                <div className={styles.telegram}>LiquiShield</div>
              </div>
              <img
                className={styles.participantItem}
                alt=""
                src="/frame-165@2x.png"
                onClick={onFrameIcon21Click}
              />
            </div>
            <div className={styles.participant}>
              <img
                className={styles.participantChild}
                alt=""
                src="/frame-16611@2x.png"
              />
              <div className={styles.field}>
                <div className={styles.telegram}>CaveDAO</div>
              </div>
              <img
                className={styles.participantItem}
                alt=""
                src="/frame-165@2x.png"
                onClick={onFrameIcon23Click}
              />
            </div>
            <div className={styles.participant}>
              <img
                className={styles.participantChild}
                alt=""
                src="/frame-16612@2x.png"
              />
              <div className={styles.field}>
                <div className={styles.telegram}>Champz</div>
              </div>
              <img
                className={styles.participantItem}
                alt=""
                src="/frame-165@2x.png"
                onClick={onFrameIcon25Click}
              />
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

export default Dashboard;
