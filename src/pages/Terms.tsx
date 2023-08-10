import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Terms.module.css";
import { Helmet } from 'react-helmet-async';
import HeaderWeb3 from "../components/HeaderWeb3";

const Terms: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogo31Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMenuItemClick = useCallback(() => {
    navigate("/token");
  }, [navigate]);

  const onMenuItem1Click = useCallback(() => {
    window.open("https://geniebot.gitbook.io/geniebot-whitepaper");
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
    <div className={styles.terms}>
      <Helmet>
      <title>Terms | GenieBot</title>
      <meta name="description" 
      content="Terms of agreement. Read our terms before using the bot. " />
      </Helmet>
      <div className={styles.autolayout}>
      <HeaderWeb3
          onLogo31Click={onLogo31Click}
          onMenuItemClick={onMenuItemClick}
          onMenuItem1Click={onMenuItem1Click}
          onMenuItem2Click={onMenuItem2Click}
        />
        <div className={styles.frameParent}>
          <div className={styles.termsConditionsWrapper}>
            <div className={styles.termsConditionsContainer}>
              <span>{`Terms & `}</span>
              <span className={styles.conditions}>conditions</span>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.lastUpdated24052023PleasWrapper}>
              <div className={styles.lastUpdated24052023Container}>
                <p className={styles.blankLine}>
                  <span>
                    <span>Last updated: 24-05-2023</span>
                  </span>
                </p>
                <p className={styles.blankLine}>
                  <span>
                    <span>&nbsp;</span>
                  </span>
                </p>
                <p className={styles.blankLine}>
                  <span>
                    <span>
                      Please read these Terms of Use ("Terms", "Terms of Use")
                      carefully before using the Geniebot Telegram bot (the
                      "Bot") operated by Geniebot.
                    </span>
                  </span>
                </p>
                <p className={styles.blankLine}>
                  <span>
                    <span>&nbsp;</span>
                  </span>
                </p>
                <p className={styles.blankLine}>
                  <span>
                    <span>
                      Your access to and use of the Bot is conditioned upon your
                      acceptance of and compliance with these Terms. These Terms
                      apply to all users, administrators, and others who access
                      or use the Bot.
                    </span>
                  </span>
                </p>
                <p className={styles.blankLine}>
                  <span>
                    <span>&nbsp;</span>
                  </span>
                </p>
                <p className={styles.blankLine}>
                  <span>
                    <span>
                      By accessing or using the Bot, you agree to be bound by
                      these Terms. If you disagree with any part of the Terms,
                      then you may not access the Bot.
                    </span>
                  </span>
                </p>
                <p className={styles.blankLine}>
                  <span>
                    <span>&nbsp;</span>
                  </span>
                </p>
                <p className={styles.descriptionOfService}>
                  <span>
                    <span>Description of Service</span>
                  </span>
                </p>
                <p className={styles.blankLine}>
                  <span>
                    <span>
                      Geniebot is a Telegram bot designed to provide answers to
                      project-related questions, integrate new question and
                      answer pairs added by administrators, and learn from a
                      project's whitepaper or website content. The Bot is
                      intended for informational and educational purposes only
                      and should not be relied upon as a sole source of
                      information for decision-making.
                    </span>
                  </span>
                </p>
                <p className={styles.blankLine}>
                  <span>
                    <span>&nbsp;</span>
                  </span>
                </p>
                <p className={styles.disclaimer}>Disclaimer</p>
                <p className={styles.blankLine}>
                  While we strive to ensure the accuracy and reliability of the
                  information provided by the Bot, we make no guarantees,
                  warranties, or representations regarding the completeness,
                  accuracy, reliability, or suitability of the information
                  provided. You acknowledge and agree that any reliance on the
                  information provided by the Bot is strictly at your own risk.
                  In no event will we be liable for any direct, indirect,
                  consequential, or incidental damages or any damages whatsoever
                  resulting from loss of use, data, or profits arising out of or
                  in connection with the use or performance of the information
                  provided by the Bot.
                </p>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.disclaimer}>User Conduct</p>
                <p className={styles.blankLine}>
                  You agree not to use the Bot to:
                </p>
                <p className={styles.blankLine}>
                  a. Violate any applicable laws, regulations, or guidelines; b.
                  Engage in any activity that infringes upon the rights of
                  others, including but not limited to intellectual property
                  rights; c. Distribute any content that is harmful, abusive,
                  racially or ethnically offensive, vulgar, or otherwise
                  objectionable; d. Transmit any unsolicited or unauthorized
                  advertising, promotional materials, or spam.
                </p>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.disclaimer}>Limitation of Liability</p>
                <p className={styles.blankLine}>
                  In no event shall Geniebot, its directors, employees,
                  partners, agents, suppliers, or affiliates, be liable for any
                  indirect, incidental, special, consequential or punitive
                  damages, including without limitation, loss of profits, data,
                  use, goodwill, or other intangible losses, resulting from (i)
                  your access to or use of or inability to access or use the
                  Bot; (ii) any conduct or content of any third party on the
                  Bot; (iii) any content obtained from the Bot; and (iv)
                  unauthorized access, use or alteration of your transmissions
                  or content, whether based on warranty, contract, tort
                  (including negligence), or any other legal theory, whether or
                  not we have been informed of the possibility of such damage,
                  and even if a remedy set forth herein is found to have failed
                  its essential purpose.
                </p>
                <p className={styles.disclaimer}>&nbsp;</p>
                <p className={styles.disclaimer}>Changes to Terms</p>
                <p className={styles.blankLine}>
                  We reserve the right, at our sole discretion, to modify or
                  replace these Terms at any time. If a revision is material, we
                  will provide at least 30 days' notice prior to any new terms
                  taking effect. What constitutes a material change will be
                  determined at our sole discretion. By continuing to access or
                  use the Bot after any revisions become effective, you agree to
                  be bound by the revised terms. If you do not agree to the new
                  terms, you are no longer authorized to use the Bot.
                </p>
                <p className={styles.indemnification}>&nbsp;</p>
                <p className={styles.indemnification}>Indemnification</p>
                <p className={styles.blankLine}>
                  <span>
                    <span>
                      You agree to defend, indemnify, and hold harmless
                      Geniebot, its affiliates, licensors, and service
                      providers, and its and their respective officers,
                      directors, employees, contractors, agents, licensors,
                      suppliers, successors, and assigns from and against any
                      claims, liabilities, damages, judgments, awards, losses,
                      costs, expenses, or fees (including reasonable attorneys'
                      fees) arising out of or relating to your violation of
                      these Terms of Use or your use of the Bot, including, but
                      not limited to, any use of the Bot's content, services,
                      and products other than as expressly authorized in these
                      Terms of Use, or your use of any information obtained from
                      the Bot.
                    </span>
                  </span>
                </p>
                <p className={styles.blankLine9}>
                  <span>
                    <span>&nbsp;</span>
                  </span>
                </p>
                <p className={styles.descriptionOfService}>
                  <span>
                    <span>Termination</span>
                  </span>
                </p>
                <p className={styles.blankLine}>
                  <span>
                    <span>
                      We may terminate or suspend your access to the Bot
                      immediately, without prior notice or liability, under our
                      sole discretion, for any reason whatsoever and without
                      limitation, including but not limited to a breach of the
                      Terms.
                    </span>
                  </span>
                </p>
                <p className={styles.blankLine}>
                  <span>
                    <span>
                      All provisions of the Terms which, by their nature, should
                      survive termination shall survive termination, including,
                      without limitation, ownership provisions, warranty
                      disclaimers, indemnity, and limitations of liability.
                    </span>
                  </span>
                </p>
                <p className={styles.blankLine}>
                  <span>
                    <span>&nbsp;</span>
                  </span>
                </p>
                <p className={styles.descriptionOfService}>
                  <span>
                    <span>
                      By using the Geniebot Telegram bot, you acknowledge that
                      you have read and understood these Terms of Use and agree
                      to be bound by them.
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.forQuestionsWrapper}>
          <div className={styles.forQuestions}>
            <div className={styles.forQuestionWrapper}>
              <div className={styles.forQuestion}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameContainer}>
                    <div className={styles.frameDiv}>
                      <div className={styles.forQuestionsContainer}>
                        <div className={styles.forQuestions1}>
                          <span>For</span>
                          <span className={styles.questions}> questions</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.pleaseContactGeniebotinfoOWrapper}>
                      <div className={styles.pleaseContactGeniebotinfo}>
                        Please contact @geniebotinfo on Telegram. We will be
                        happy to answer your questions or enquiries.
                      </div>
                    </div>
                  </div>
                  <div className={styles.atomsiconsblackcurveEdgetWrapper}>
                    <img
                      className={styles.atomsiconsblackcurveEdget}
                      alt=""
                      src="/atomsiconsblackcurveedgetelegram.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerContainer}>
            <div className={styles.footerContainerInner}>
              <div className={styles.vectorWrapper}>
                <img className={styles.frameChild} alt="" />
              </div>
            </div>
            <div className={styles.links}>
              <div className={styles.linksContainer}>
                <div className={styles.cont}>
                  <div className={styles.columnlinks1}>
                    <div className={styles.linkframe1}>
                      <button className={styles.home} onClick={onHomeClick}>
                        Home
                      </button>
                    </div>
                    <div className={styles.linkframe1}>
                      <button className={styles.home} onClick={onTokenClick}>
                        Token
                      </button>
                    </div>
                  </div>
                  <div className={styles.columnlinks2}>
                    <div className={styles.linkframe3}>
                      <button
                        className={styles.terms1}
                        onClick={onTermsClick}
                      >{`Terms `}</button>
                    </div>
                    <div className={styles.linkframe4}>
                      <button
                        className={styles.home}
                        onClick={onWhitepaperClick}
                      >
                        Whitepaper
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.columnlinks3}>
                  <div className={styles.linkframe5}>
                    <button
                      className={styles.getStarted}
                      onClick={onGetStartedClick}
                    >
                      Get started
                    </button>
                    <button
                      className={styles.register}
                      onClick={onRegisterClick}
                    >
                      Register
                    </button>
                  </div>
                  <div className={styles.linkframe6}>
                    <button className={styles.home} onClick={onFeaturesClick}>
                      Features
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.socialMediaLinksParent}>
                <div className={styles.socialMediaLinks}>
                  <button className={styles.telegramWrapper}>
                    <img
                      className={styles.telegramIcon}
                      alt=""
                      src="/telegram2.svg"
                    />
                  </button>
                  <button className={styles.twitterWrapper}>
                    <img
                      className={styles.twitterIcon}
                      alt=""
                      src="/twitter1.svg"
                    />
                  </button>
                  <button className={styles.uniswapLogoBlack1Wrapper}>
                    <img
                      className={styles.uniswapLogoBlack1Icon}
                      alt=""
                      src="/uniswaplogoblack-11@2x.png"
                    />
                  </button>
                </div>
                <div className={styles.geniebotWrapper}>
                  <div className={styles.geniebot}>©2023 Geniebot</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
