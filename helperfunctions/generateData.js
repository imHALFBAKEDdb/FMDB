var faker = require("faker");
var fs = require("fs");
const writefile = fs.createWriteStream("./helperfunctions/data.json");

var randomMovieLength = () => {
  var randomhours = Math.floor(Math.random() * 2 + 1);
  var randomminutes = Math.floor(Math.random() * 59 + 1);
  var hours = "hours";
  var minutes = "minutes";
  if (randomhours === 1) {
    hours = "hour";
  }
  if (randomminutes === 1) {
    minutes = "minute";
  }
  return `${randomhours} ${hours} ${randomminutes} ${minutes}`;
};

var randomActorInfo = () => {
  let arr = [];
  let randomNum = Math.floor(Math.random() * 5 + 1);
  var randomObj = {
    charactor_name: "",
    actor_name: ""
  };
  for (let i = 0; i < randomNum; i++) {
    randomObj.charactor_name = faker.name.findName();
    randomObj.actor_name = faker.name.findName();
    arr.push(randomObj);
  }
  return arr;
};

var generate10Mdata = () => {
  var bigData = [];
  var obj = {
    Title: "",
    Year: "",
    imdbID: "",
    Type: "movie",
    Poster: "",
    review_average: "",
    review_count: "",
    extra_images: "",
    director: "",
    writer: "",
    release_date: "",
    movie_length: "",
    actor_info: ""
  };
  for (let i = 0; i < 10000000; i++) {
    obj.Title = faker.commerce.productName();
    obj.Year = faker.date.past();
    obj.imdbID = "tt" + faker.random.number();
    obj.Poster = faker.image.people();
    obj.review_average = Math.floor(Math.random() * 5 + 1);
    obj.review_count = faker.random.number();
    obj.extra_images = faker.image.animals();
    obj.director = faker.name.findName();
    obj.writer = faker.name.findName();
    obj.release_date = faker.date.past();
    obj.movie_length = randomMovieLength();
    obj.actor_info = randomActorInfo();
    writefile.write(JSON.stringify(obj));
    console.log(i);
  }
};

generate10Mdata();
// fs.writeFile("data1.json", JSON.stringify(generate10Mdata(), null, 2), (err) => {
//   if(err) throw err;
//   console.log("the file has been saved!")
// })