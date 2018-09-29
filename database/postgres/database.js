const Sequelize = require("sequelize");
const connection = new Sequelize("moviedata", "postgres", "", {
  host: "localhost",
  dialect: "postgres",
  port: 5432
});

connection
  .authenticate()
  .then(() => console.log("Successfully conneted to the database"))
  .catch(err => console.log("Error connecting to the database", err));


const MovieList = connection.define(
  "movies",
  {
    Title: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    Year: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    imdbID: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    Type: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    Poster: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    review_average: {
      type: Sequelize.SMALLINT,
      allowNull: false
    },
    review_count: {
      type: Sequelize.SMALLINT,
      allowNull: false
    },
    extra_images: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    director: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    writer: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    release_date: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    movie_length: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    actor_info: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    movie_genre:  {
      type: Sequelize.TEXT,
      allowNull: false
    },
    review_date: {
      type: Sequezlize.TEXT,
      allowNull: false
    },
    reviewer: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    review_title: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    reviews_number: {
      type: Sequelize.SMALLINT,
      allowNull: false
    },
    review_viewers: {
      type: Sequelize.SMALLINT,
      allowNull: false
    },
    review: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    movie_description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    movie_id: {
      type: Sequelize.SMALLINT,
      allowNull: false
    }
  }
)

connection.sync({force: false});

module.exports = { MovieList }