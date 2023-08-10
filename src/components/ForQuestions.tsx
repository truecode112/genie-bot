import { FunctionComponent } from "react";
import styles from "./ForQuestions.module.css";

type ForQuestionsType = {
  productId?: string;
};

const ForQuestions: FunctionComponent<ForQuestionsType> = ({ productId }) => {
  return (
    <div className={styles.forQuestions}>
      <div className={styles.forQuestionWrapper}>
        <div className={styles.forQuestion}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper}>
                <div className={styles.forQuestionsWrapper}>
                  <div className={styles.forQuestions1}>
                    <span>For</span>
                    <span className={styles.questions}> questions</span>
                  </div>
                </div>
              </div>
              <div className={styles.pleaseContactGeniebotinfoOWrapper}>
                <div className={styles.pleaseContactGeniebotinfo}>
                  Please contact @OxElyy on Telegram. We will be happy to
                  answer your questions or enquiries.
                </div>
              </div>
            </div>
            <div className={styles.atomsiconsblackcurveEdgetWrapper}>
                <a href="https://t.me/OxElyy" target="_blank" rel="noopener noreferrer">
                  <img
                    className={styles.atomsiconsblackcurveEdget}
                    alt=""
                    src={productId}
                  />
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForQuestions;
