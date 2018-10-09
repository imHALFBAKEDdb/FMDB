const Sequelize = require("sequelize");

const connection = new Sequelize("moviedata", "postgres", "", {
  host: "localhost",
  port: 5432,
  dialect: "postgres"
});

connection
  .authenticate()
  .then(() => console.log("Successfully connected to the postgres database"))
  .catch(err => console.log("Error connecting to the database postgres", err));


const MovieList = connection.define(
  "movies",
  {
    title: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    year: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    imdbID: {
      type: Sequelize.STRING(20),
      allowNull: false
    },
    type: {
      type: Sequelize.STRING(20),
      allowNull: false
    },
    poster: {
      type: Sequelize.STRING(500),
      allowNull: false
    },
    review_average: {
      type: Sequelize.SMALLINT,
      allowNull: false
    },
    review_count: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    extra_images: {
      type: Sequelize.STRING(500),
      allowNull: false
    },
    director: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    writer: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    release_date: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    movie_length: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    actor_info: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    movie_genre:  {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    review_date: {
      type: Sequelize.STRING(50),
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
      type: Sequelize.INTEGER,
      allowNull: false
    },
    review_viewers: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    review: {
      type: Sequelize.STRING(2000),
      allowNull: false
    },
    movie_description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    movie_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: true
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: true
    }
  },
  { timestamps: false }
)

connection.sync({force: false});

module.exports = { MovieList }