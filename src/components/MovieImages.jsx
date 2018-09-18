import React from "react";
import styles from "../styles/MovieImages.css";

const MovieImages = props => {
  return (
    <div className={styles.images}>
      <div className={styles.Poster}>
        <img src="https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg" />
      </div>
      <div className={styles.imageSpacer} />
      <div className={styles.secondImage}>
        <img src="https://gifer.com/i/3hmW.gif" />
      </div>
    </div>
  );
};

export default MovieImages;
