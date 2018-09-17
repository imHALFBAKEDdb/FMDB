var mongoose = require("mongoose");
var mongoUri = "mongodb://localhost:27017/movies";

mongoose.connect(
  mongoUri,
  { useNewUrlParser: true }
);

var db = mongoose.connection;

db.on("error", () => {
  console.log("there was an error connecting to db");
});

db.once("open", () => {
  console.log("succesfully connected to db");
});

var movieSchema = new mongoose.Schema({
  Title: String,
  Year: String,
  imdbID: String,
  Type: String,
  Poster: String,
  review_average: Number,
  review_count: Number,
  extra_images: String,
  director: String,
  writer: String,
  release_date: String,
  movie_length: String,
  actor_info: { type: Array, default: [] },
  movie_rating: String,
  movie_genre: String,
  review_date: String,
  reviewer: String,
  review_title: String,
  reviews_number: Number,
  review_viewers: Number,
  review: String,
  movie_description: String
});

var Movies = mongoose.model("Movies", movieSchema);

module.exports = Movies;
