import { FunctionComponent, useState, useRef } from "react";
import styles from "./HeaderDesktop.module.css";
import HamburgerMenu from "./Hamburger"; 
import useOutsideAlerter from "./OutsideAlerter";

type HeaderDesktopType = {
  onLogoPlaceholderContainerClick?: () => void;
  onMenuItem1Click?: () => void;
  onMenuItem2Click?: () => void;
  onMenuItem3Click?: () => void;
  onMenuItem11Click?: () => void;
  onMenuItem12Click?: () => void;
};

const HeaderDesktop: FunctionComponent<HeaderDesktopType> = ({
  onLogoPlaceholderContainerClick,
  onMenuItem1Click,
  onMenuItem2Click,
  onMenuItem3Click,
  onMenuItem11Click,
  onMenuItem12Click,
}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null); // create a ref
  
  // use the hook
  useOutsideAlerter(wrapperRef, () => setIsMenuOpen(false));

  return (
    <header className={styles.headerDesktop}>
      <div className={styles.headerContainer}>
        <div
          className={styles.logoPlaceholder}
          onClick={onLogoPlaceholderContainerClick}
        >
          <img className={styles.logo31Icon} alt="" src="/GenieLogo.png" />
        </div>
        <nav className={styles.menuItems}>
          <div className={styles.menuitem1}>
            <button className={styles.menuItem} onClick={onMenuItem1Click}>
              Token
            </button>
          </div>
          <div className={styles.menuitem11}>
            <button className={styles.menuItem} onClick={onMenuItem2Click}>
              Whitepaper
            </button>
          </div>
          <div className={styles.menuitem11}>
            <button className={styles.menuItem} onClick={onMenuItem3Click}>
              Features
            </button>
          </div>
        </nav>
        <div className={styles.menuButtons}>
          <button className={styles.menuitem13} onClick={onMenuItem11Click}>
            <div className={styles.menuItem3}>Register</div>
          </button>
          <button className={styles.menuitem14} onClick={onMenuItem12Click}>
            <div className={styles.menuItem4}>Log in</div>
          </button>
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
    </header>
  );
};

export default HeaderDesktop;
