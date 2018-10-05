var movies = require("./dataASYNC100.tsv");
var db = require("./database.js");

var insertAllMovies = function(req, res) {
  console.log("insertAllMoviesssss");
  movies.forEach(movie => {
    db.MovieList.create({
      id: movie.id,
      title: movie.title,
      year: movie.year,
      imdbID: movie.imdbID,
      type: movie.type,
      poster: movie.poster,
      review_average: movie.review_average,
      review_count: movie.review_count,
      extra_images: movie.extra_images,
      director: movie.director,
      writer: movie.writer,
      release_date: movie.release_date,
      movie_length: movie.movie_length,
      actor_info: movie.actor_info, 
      movie_genre: movie.movie_genre, 
      review_date: movie.review_date, 
      reviewer: movie.reviewer, 
      review_title: movie.review_title, 
      reviews_number: movie.reviews_number, 
      review_viewers: movie.review_viewers, 
      review: movie.review, 
      movie_description: movie.movie_description, 
      movie_id: movie.movie_id
    })
    .then(movie => {
      console.log("movie saved");
    })
    .catch(err => {
      console.log(err);
    })
  })
};

insertAllMovies();