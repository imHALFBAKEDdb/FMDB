import React from "react";
import styles from "../styles/BottomTextArea.css";

const BottomTextArea = props => {
  return (
    <div className={styles.bottomTextArea}>
      <div className={styles.movieDescription}>
        {props.movie.movie_description}
      </div>
      <div>
        <div className={styles.detailsHeader}>
          Director:{" "}
          <a className={styles.detailsBody} href="">
            {props.movie.director}
          </a>
        </div>
        <div className={styles.detailsHeader}>
          Writer:{" "}
          <a className={styles.detailsBody} href="">
            {props.movie.writer}
          </a>
        </div>
        <div className={styles.detailsHeader}>
          Stars:
          <a className={styles.detailsBody} href="">
            {" "}
            {props.movie.actor_info.map((actor, key) => {
              return <span key={key}>{actor.actor_name + ", "}</span>;
            })}
            {"  |  "} See Full Cast & Crew{" "}
            <img
              className={styles.rightArrows}
              src="https://www.shareicon.net/download/2015/12/06/683223_arrows.svg"
            />
          </a>
        </div>
      </div>
      <div className={styles.addToWatchlistIcon}>
        <a className={styles.addToWatchlistText}>+ Add to Watchlist</a>
      </div>
      <div className={styles.bottomReview}>
        <div>Reviews</div>
        <a href="" className={styles.reviewUserCount}>
          {props.movie.reviews_number} users
        </a>
      </div>
    </div>
  );
};

export default BottomTextArea;
