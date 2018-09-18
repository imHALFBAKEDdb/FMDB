import React from "react";
import axios from "axios";
import styles from "../styles/styles.css";
import TopHyperlinkBar from "./TopHyperlinkBar.jsx";
import Heading from "./Heading.jsx";
import MovieImages from "./MovieImages.jsx";
import HowToWatch from "./HowToWatch.jsx";
import BottomTextArea from "./BottomTextArea.jsx";

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
        <div className={styles.container}>
          <div>
            <TopHyperlinkBar />
            <Heading movie={this.state.movie} />
            <MovieImages />
            <HowToWatch />
            <BottomTextArea movie={this.state.movie} />
          </div>
        </div>
      );
    } else {
      return "Loading...";
    }
  }
}

export default App;
