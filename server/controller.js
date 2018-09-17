var Movies = require("../database/database.js");

module.exports = {
  get: (req, res) => {
    title = req.body;
    Movies.find({})
      .limit(1)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        console.log(err, "there was an err");
      });
  }
};
