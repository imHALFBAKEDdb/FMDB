var Movies = require("../database/mongo/database.js");
//var Movies = require("../database/postgres/database.js")

//mongo
module.exports = {
  get: (req, res) => {
    // console.log(req);
    //title = req.body;
    Movies.find({ movie_id: req.params.id })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        console.log(err, "there was an err");
      });
  }
};

//postgres
// module.exports = {
//   fetch: (req, res) => {
//     //  var id = randomNum();
//     title = req.body
//      Movies.MovieList.findAll({
//        where: {
//          movie_id: req.params.id}
//        })
//      .then(movie => {
//          if(movie){
//              res.status(200).send(movie);
//          } else {
//              res.status(404).send('Movie not found')
//          }
//      })
//      .catch(err => res.status(404).send(err))
//   }
// }