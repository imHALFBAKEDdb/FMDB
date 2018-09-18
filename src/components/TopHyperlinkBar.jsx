import React from "react";
import styles from "../styles/TopHyperlinkBar.css";

const TopHyperlinkBar = props => {
  return (
    <div className={styles.topHyperlinks}>
      <a href="" className={styles.hyperlinkColor}>
        FULL CAST AND CREW{" "}
      </a>
      <a className={styles.spacer}>{"|"}</a>
      <a href="" className={styles.hyperlinkColor}>
        TRIVIA
      </a>
      <a className={styles.spacer}>{"|"}</a>
      <a href="" className={styles.hyperlinkColor}>
        USER REVIEWS
      </a>
      <a className={styles.spacer}>{"|"}</a>
      <a className={styles.hyperlinkColor} href="">
        IMDBpro
      </a>
      <a className={styles.spacer}>{"|"}</a>
      <div className={styles.more}>
        <a className={styles.hyperlinkColor} href="">
          MORE
          <img
            className={styles.arrowIcon}
            src="http://concavecuttingboard.com/wp-content/uploads/2014/10/down-arrow.png"
          />
        </a>
      </div>

      <a className={styles.spacer}>{""}</a>

      <a className={styles.shareLink} href="">
        SHARE
      </a>
    </div>
  );
};

export default TopHyperlinkBar;
