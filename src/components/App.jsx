import React from "react";
import axios from "axios";
import styles from "../styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
    this.retrieveMovieData = this.retrieveMovieData.bind(this);
  }
  componentDidMount() {
    this.retrieveMovieData();
  }

  retrieveMovieData() {
    axios
      .get("/api/title")
      .then(res => {
        //console.log(res.data);
        this.setState({
          movie: res.data[0]
        });
        console.log("movie data retrieved", this.state.movie);
      })
      .catch(err => {
        console.log("there was an error retrieving data", err);
      });
  }

  render() {
    if (this.state.movie !== null) {
      return (
        <div>
          <div className={styles.container}>
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

            <div className={styles.mainTileHeading}>
              <div>
                <button className={styles.ribbon}>
                  <img
                    className={styles.ribbonImg}
                    src="http://www.jmkxyy.com/plus-sign-icon/plus-sign-icon-19.jpg"
                  />
                </button>
              </div>
              <div className={styles.titleAndDetails}>
                <div className={styles.Title}>
                  {this.state.movie.Title}
                  <a className={styles.releaseYear}>
                    ({this.state.movie.release_date.slice(-4)})
                  </a>
                </div>
                <div className={styles.detailsLine}>
                  <a className={styles.detailsColor}>
                    {" "}
                    {this.state.movie.movie_rating}
                  </a>
                  <a className={styles.spacer}>{"|"}</a>
                  <a className={styles.detailsColor}>
                    {this.state.movie.movie_length}
                  </a>
                  <a className={styles.spacer}>{"|"}</a>
                  <a className={styles.detailsColor}>
                    {this.state.movie.movie_genre}
                  </a>
                  <a className={styles.spacer}>{"|"}</a>
                  <a className={styles.detailsColor}>
                    {this.state.movie.release_date}
                  </a>
                </div>
              </div>
              <div className={styles.ratingBox}>
                <a className={styles.starIcon}>
                  <img
                    className={styles.starImg}
                    src="https://www.photospng.com/uploads/plain-clipart-yellow-star-download.png"
                  />
                </a>
                <div className={styles.reviewCounts}>
                  <a className={styles.review_average}>
                    {this.state.movie.review_average}
                    <span className={styles.outOfTen}>/10</span>
                  </a>
                  <a href="" className={styles.totalReviews}>
                    {this.state.movie.reviews_number}
                  </a>
                </div>

                <a className={styles.reviewSpacer} />
                <a className={styles.rateThis}>
                  <span>
                    {/* should be clickable with pop up stars to rate */}
                    <img
                      className={styles.rateThisStar}
                      src="https://cdn1.iconfinder.com/data/icons/hawcons/32/699009-icon-23-star-512.png"
                    />
                  </span>
                  {/* should have same hyperlink as star that prompts vote */}
                  <span className={styles.rateThisText}>
                    <span>Rate</span>
                    <span>This</span>
                  </span>
                </a>
              </div>
            </div>

            <div className={styles.images}>
              <div className={styles.Poster}>
                <img src="https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg" />
              </div>
              <div className={styles.imageSpacer} />
              <div className={styles.secondImage}>
                <img src="https://gifer.com/i/3hmW.gif" />
              </div>
            </div>
            <div className={styles.howToWatch}>
              <a href="" className={styles.howToWatchText}>
                Watch Now
              </a>
            </div>
            <div className={styles.bottomTextArea}>
              <div className={styles.movieDescription}>
                {this.state.movie.movie_description}
              </div>
              <div>
                <div className={styles.detailsHeader}>
                  Director:{" "}
                  <a className={styles.detailsBody} href="">
                    {this.state.movie.director}
                  </a>
                </div>
                <div className={styles.detailsHeader}>
                  Writer:{" "}
                  <a className={styles.detailsBody} href="">
                    {this.state.movie.writer}
                  </a>
                </div>
                <div className={styles.detailsHeader}>
                  Stars:
                  <a className={styles.detailsBody} href="">
                    {" "}
                    {this.state.movie.actor_info.map((actor, key) => {
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
                  {this.state.movie.reviews_number} users
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return "Loading...";
    }
  }
}

export default App;
