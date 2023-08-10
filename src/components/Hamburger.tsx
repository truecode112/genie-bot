import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Hamburger.module.css";

type HamburgerMenuType = {
  setIsMenuOpen: (isOpen: boolean) => void;
};

const HamburgerMenu: FunctionComponent<HamburgerMenuType> = ({ setIsMenuOpen }) => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGetStartedTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onTokenTextClick = useCallback(() => {
    navigate("/token");
  }, [navigate]);

  const onWhitepaperTextClick = useCallback(() => {
    window.open("https://geniebot.gitbook.io/geniebot-whitepaper/");
  }, []);

  const onFeaturesTextClick = useCallback(() => {
    navigate("/features");
  }, [navigate]);

  const onTermsTextClick = useCallback(() => {
    navigate("/terms");
  }, [navigate]);

  return (
    <div className={styles.hamburgerMenu}>
      <div className={styles.hamburgerMenuItems}>
        <div className={styles.home} onClick={onHomeTextClick}>
          Home
        </div>
      </div>
      <div className={styles.hamburgerMenuItems1}>
        <div className={styles.home} onClick={onGetStartedTextClick}>
          Get started
        </div>
      </div>
      <div className={styles.hamburgerMenuItems2}>
        <div className={styles.home} onClick={onTokenTextClick}>
          Token
        </div>
      </div>
      <div className={styles.hamburgerMenuItems3}>
        <div className={styles.home} onClick={onWhitepaperTextClick}>
          Whitepaper
        </div>
      </div>
      <div className={styles.hamburgerMenuItems4}>
        <div className={styles.home} onClick={onFeaturesTextClick}>
          Features
        </div>
      </div>
      <div className={styles.hamburgerMenuItems5}>
        <div className={styles.home} onClick={onTermsTextClick}>
          Terms
        </div>
      </div>
      <img
        className={styles.hamburgerMenu3Icon}
        alt=""
        src="/closeicon.png"
        onClick={() => setIsMenuOpen(false)}
      />
    </div>
  );
};

export default HamburgerMenu;
