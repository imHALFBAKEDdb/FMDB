var Movies = require("./database.js");
var myData = require("./movieData.js");
var mongoose = require("mongoose");

// var myData = JSON.stringify(myData);
//initialize data in databse - only run once

var addDataToDatabase = function(input) {
  for (var i = 0; i < input.length; i++) {
    //console.log(input[i]["Title"]);
    new Movies({
      Title: input[i].Title,
      Year: input[i]["Year"],
      imdbID: input[i]["imdbID"],
      Type: input[i]["Type"],
      Poster: input[i]["Poster"],
      review_average: input[i]["review_average"],
      review_count: input[i]["review_count"],
      extra_images: input[i]["extra_images"],
      director: input[i]["director"],
      writer: input[i]["writer"],
      release_date: input[i]["release_date"],
      movie_length: input[i]["movie_length"],
      movie_rating: input[i]["movie_rating"],
      actor_info: input[i]["actor_info"],
      movie_genre: input[i]["movie_genre"],
      review_date: input[i]["review_date"],
      reviewer: input[i]["reviewer"],
      review_title: input[i]["review_title"],
      reviews_number: input[i]["reviews_number"],
      review_viewers: input[i]["review_viewers"],
      review: input[i]["review"],
      movie_description: input[i]["movie_description"],
      movie_id: input[i]["id"]
    })
      .save()
      .then(() => {
        console.log("saved to db");
      })
      .catch(err => {
        console.log("there was an error", err);
      });
  }
};

 addDataToDatabase(myData);

//find data from database
// var retrieved = function(cb) {
//   Movies.find({})
//     .then(res => {
//       cb(res);
//     })
//     .catch(err => {
//       cb(err);
//     });
// };

module.exports.addDataToDatabase = addDataToDatabase;
