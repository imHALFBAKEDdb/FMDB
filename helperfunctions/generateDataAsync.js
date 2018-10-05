var faker = require("faker");
var fs = require("fs");
const writer = fs.createWriteStream("dataASYNCpostgres.tsv");
const thetimeisnow = require("performance-now");

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

var randomYear = () => {
  return Math.floor(Math.random() * 2018 + 1);
};

var randomActorInfo = () => {
  let arr = [];
  let randomNum = Math.floor(Math.random() * 5 + 1);
  var randomObj = {
    character_name: "",
    actor_name: ""
  };
  for (let i = 0; i < randomNum; i++) {
    randomObj.character_name = faker.name.findName();
    randomObj.actor_name = faker.name.findName();
    arr.push(randomObj);
  }
  let str = JSON.stringify(arr);
  // let replQuote = /"/gi;
  // let newStr = str.replace(replQuote, "");
  return str;
};

var randomGenre = () => {
  let genres = [
    "horror",
    "romance",
    "comedy",
    "documentary",
    "action",
    "thriller",
    "drama",
    "western",
    "animated",
    "science fiction",
    "musical theatre",
    "indie",
    "mystery",
    "fantasy",
    "martial arts",
    "anime",
    "superhero"
  ];

  var randomIndex = Math.floor(Math.random() * 16);

  return genres[randomIndex];
};

function randomDate(start, end) {
  var d = new Date(start.getTime() + Math.random() * (end.getTime() -                     start.getTime())),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [month, day, year].join('-');
}
// var i = 0;
// var increment = () => {
//   return ++i;
// }
//for json
// var obj =  {
//   Title: "",
//   Year: "",
//   imdbID: "",
//   Type: "",
//   Poster: "",
//   review_average: "",
//   review_count: "",
//   extra_images: "",
//   director: "",
//   writer: "",
//   release_date: "",
//   movie_length: "",
//   actor_info: "",
//   movie_genre: "",
//   review_date: "",
//   reviewer: "",
//   review_title: "",
//   reviews_number: "",
//   review_viewers: "",
//   review: "",
//   movie_description: "",
//   movie_id:""
// }

//for csv

var k = 0;
var index = () => {
  return ++k;
};

var newDate = new Date(Date.now()).toISOString();
//var header =
  //"Title\tYear\timdbID\tType\tPoster\treview_average\treview_count\textra_image\tdirector\twriter\trelease_date\tmovie_length\tactor_info\tmovie_genre\treview_date\treviewer\treview_title\treviews_number\treview_viewers\treview\tmovie_description\tmovie_id\n";
var t0 = thetimeisnow();
//writer.write(header);

var generate1M = j => {
  if (j === 100) {
    return;
  }
  for (let i = 0; i < 100000; i++) {
    // for json
    // obj.Title = faker.commerce.productName();
    // obj.Year = faker.date.past();
    // obj.imdbID = randomYear();
    // obj.Type = "tt" + faker.random.number();
    // obj.Poster = faker.image.people();
    // obj.review_average = Math.floor(Math.random() * 5 + 1);
    // obj.review_count = faker.random.number();
    // obj.extra_images = faker.image.animals();
    // obj.director = faker.name.findName();
    // obj.writer = faker.name.findName();
    // obj.release_date = faker.date.past();
    // obj.movie_length = randomMovieLength();
    // obj.actor_info = randomActorInfo();
    // obj.movie_genre = faker.lorem.word();
    // obj.review_date = faker.date.past();
    // obj.reviewer = faker.name.findName();
    // obj.review_title = faker.random.word();
    // obj.reviews_number = faker.random.number();
    // obj.review_viewers = faker.random.number();
    // obj.review = faker.lorem.paragraph();
    // obj.movie_description = faker.lorem.words();
    // obj.movie_id = faker.random.number();
    // writer.write(JSON.stringify(obj))
    //let str = `${faker.commerce.productName()}\t${randomDate(new Date(1985, 0, 1), new Date())}\t${randomYear()}\ttt${faker.random.number()}\t${faker.image.people()}\t${Math.floor(
      //Math.random() * 10 + 1
    //)}\t${faker.random.number()}\t${faker.image.animals()}\t${faker.name.findName()}\t${faker.name.findName()}\t${randomDate(new Date(1985, 0, 1), new Date())}\t${randomMovieLength()}\t${randomActorInfo()}\t${randomGenre()}\t${randomDate(new Date(1985, 0, 1), new Date())}\t${faker.name.findName()}\t${faker.random.word()}\t${faker.random.number()}\t${faker.random.number()}\t${faker.lorem.paragraph()}\t${faker.lorem.words()}\t${index()}\n`;
    let str = `${faker.commerce.productName()}\t${randomDate(new Date(1985, 0, 1), new Date())}\t${randomYear()}\ttt${faker.random.number()}\t${faker.image.people()}\t${Math.floor(Math.random() * 10 + 1)}\t${faker.random.number()}\t${faker.image.animals()}\t${faker.name.findName()}\t${faker.name.findName()}\t${randomDate(new Date(1985, 0, 1), new Date())}\t${randomMovieLength()}\t${randomActorInfo()}\t${randomGenre()}\t${randomDate(new Date(1985, 0, 1), new Date())}\t${faker.name.findName()}\t${faker.random.word()}\t${faker.random.number()}\t${faker.random.number()}\t${faker.lorem.paragraph()}\t${faker.lorem.words()}\t${index()}\t${newDate}\t${newDate}\n`;
    writer.write(str);
  }

  setTimeout(() => {
    generate1M(++j);
  }, 0);
  console.log(j);
  console.log("finished in " + (thetimeisnow() - t0) / 1000 + " seconds");
};

generate1M(0);
