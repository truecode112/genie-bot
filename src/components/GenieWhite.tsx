import { FunctionComponent, useCallback, ReactNode } from "react";
import styles from "./GenieWhite.module.css";
import whiteGenie from "../videos/white_genie.mp4"
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from '@react-spring/web';

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

type GenieWhiteType = {
  timePeriodText?: string;
  ethPriceText?: string;
  onGenieClick?: () => void;
};

const GenieWhite: FunctionComponent<GenieWhiteType> = ({
  timePeriodText,
  ethPriceText,
  onGenieClick,
}) => {
  
  const navigate = useNavigate();

  const onGenie1Click = useCallback(() => {
    navigate("/check-out");
  }, [navigate]);

  const onGenie2Click = useCallback(() => {
    navigate("/check-out");
  }, [navigate]);

  const onGenie3Click = useCallback(() => {
    navigate("/check-out");
  }, [navigate]);

  
  return (
    <div className={styles.whiteContainer}>
      <div className={styles.name}>
        <div className={styles.nameChild} />
        <div className={styles.white}>{`White `}</div>
        <div className={styles.beta}>{`(Beta) `}</div>
      </div>
      <div className={styles.geniebottleContainer}>
        <div className={styles.geniebottleWhite}>
            <video className={styles.ezgifcomCrop11} autoPlay muted loop playsInline>
              <source src={whiteGenie} />
            </video>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.daysWrapper}>
          <div className={styles.days}>{timePeriodText}</div>
        </div>
        <div className={styles.ethWrapper}>
          <div className={styles.eth}>{ethPriceText}</div>
        </div>
      </div>
      <div className={styles.bulletPoints}>
        <div className={styles.bulletPointsContainer}>
          <div className={styles.bulletPointsContainerInner}>
            <div className={styles.frameGroup}>
              <div className={styles.frameChild} />
              <div className={styles.interactsWithUsersInAHumaWrapper}>
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
              <div className={styles.interactsWithUsersInAHumaWrapper}>
                <div className={styles.interactsWithUsers}>
                  addresses all project-related questions.
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
              <div className={styles.interactsWithUsersInAHumaWrapper}>
                <div className={styles.interactsWithUsers}>
                  knowledge base sourced from your whitepaper, website, or
                  custom sources.
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
              <div className={styles.interactsWithUsersInAHumaWrapper}>
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
              <div className={styles.interactsWithUsersInAHumaWrapper}>
                <div className={styles.interactsWithUsers}>
                  dedicated support from our team during office hours.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.selectButtonWrapper}>
        <button className={styles.selectButton} onClick={onGenieClick}>
          <div className={styles.select}>Select</div>
        </button>
      </div>
    </div>
  );
};

export default GenieWhite;
