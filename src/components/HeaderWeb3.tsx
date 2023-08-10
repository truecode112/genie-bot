import { FunctionComponent, useRef, useState } from "react";
import styles from "./HeaderWeb3.module.css";
import { ConnectWallet } from "@thirdweb-dev/react";
import HamburgerMenu from "./Hamburger"; 
import useOutsideAlerter from "./OutsideAlerter";

type HeaderWeb3Type = {
  /** Action props */
  onLogo31Click?: () => void;
  onMenuItemClick?: () => void;
  onMenuItem1Click?: () => void;
  onMenuItem2Click?: () => void;
};

const HeaderWeb3: FunctionComponent<HeaderWeb3Type> = ({
  onLogo31Click,
  onMenuItemClick,
  onMenuItem1Click,
  onMenuItem2Click,
}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null); // create a ref
  
  // use the hook
  useOutsideAlerter(wrapperRef, () => setIsMenuOpen(false));

  return (
    <nav className={styles.headerWeb3}>
      <div className={styles.headerContainer}>
        <div className={styles.logoPlaceholder}>
          <button className={styles.logo31} onClick={onLogo31Click} />
        </div>
        <nav className={styles.menuItems}>
          <div className={styles.menuitem1}>
            <button className={styles.menuItem} onClick={onMenuItemClick}>
              Token
            </button>
          </div>
          <div className={styles.menuitem1}>
            <button className={styles.menuItem} onClick={onMenuItem1Click}>
              Whitepaper
            </button>
          </div>
          <div className={styles.menuitem1}>
            <button className={styles.menuItem} onClick={onMenuItem2Click}>
              Features
            </button>
          </div>
        </nav>
        <div className={styles.menuButtons}>
        <ConnectWallet
        className="brixton"
        />
          <div className={styles.menuHamburger} ref={wrapperRef}>
            <button className={styles.hamburgerMenu} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className={styles.hamburgerMenuChild} />
              <div className={styles.hamburgerMenuChild} />
              <div className={styles.hamburgerMenuChild} />
            </button>
            {isMenuOpen && (
              <div className={styles.dropdownMenu}>
                <HamburgerMenu setIsMenuOpen={setIsMenuOpen} />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderWeb3;
