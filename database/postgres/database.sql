-- DROP DATABASE IF EXISTS "moviedata";

CREATE TABLE "movies" (
  "title" VARCHAR(100) NOT NULL,
  "year" VARCHAR(50) NOT NULL, 
  "imdbID" VARCHAR(20) NOT NULL, 
  "type" VARCHAR(100) NOT NULL, 
  "poster" VARCHAR(500) NOT NULL,
  "review_average" SMALLINT NOT NULL,
  "review_count" INTEGER NOT NULL,
  "extra_images" VARCHAR(500) NOT NULL,
  "director" VARCHAR(100) NOT NULL, 
  "writer" VARCHAR(100) NOT NULL,
  "release_date" VARCHAR(50) NOT NULL, 
  "movie_length" VARCHAR(50) NOT NULL,
  "actor_info" TEXT NOT NULL,
  "movie_genre" VARCHAR(50) NOT NULL,
  "review_date" VARCHAR(50) NOT NULL,
  "reviewer" TEXT NOT NULL,
  "review_title" TEXT NOT NULL,
  "reviews_number" INTEGER NOT NULL,
  "review_viewers" INTEGER NOT NULL,
  "review" VARCHAR(2000) NOT NULL,
  "movie_description" TEXT NOT NULL,
  "movie_id" INTEGER NOT NULL,
  "created_at" TIMESTAMP WITH TIME ZONE,
  "updated_at" TIMESTAMP WITH TIME ZONE,
  PRIMARY KEY ("movie_id")
)

