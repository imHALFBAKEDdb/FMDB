var faker = require("faker");
var fs = require("fs");
const writer = fs.createWriteStream("data.json");
const thetimeisnow = require('performance-now')

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
  return Math.floor((Math.random() * 2018) + 1) - Math.floor((Math.random()*1950) + 1);
}

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
  return JSON.stringify(arr);
};

var obj =  {
  Title: "",
  Year: "",
  imdbID: "",
  Type: "",
  Poster: "",
  review_average: "",
  review_count: "",
  extra_images: "",
  director: "",
  writer: "",
  release_date: "",
  movie_length: "",
  actor_info: "", 
  movie_genre: "", 
  review_date: "", 
  reviewer: "", 
  review_title: "", 
  reviews_number: "", 
  review_viewers: "", 
  review: "", 
  movie_description: "", 
  movie_id:""
}

var dataGenerator = () => {
  obj.Title = faker.commerce.productName();
  obj.Year = faker.date.past();
  obj.imdbID = randomYear();
  obj.Type = "tt" + faker.random.number();
  obj.Poster = faker.image.people();
  obj.review_average = Math.floor(Math.random() * 5 + 1);
  obj.review_count = faker.random.number();
  obj.extra_images = faker.image.animals();
  obj.director = faker.name.findName();
  obj.writer = faker.name.findName();
  obj.release_date = faker.date.past();
  obj.movie_length = randomMovieLength();
  obj.actor_info = randomActorInfo(); 
  obj.movie_genre = faker.lorem.word(); 
  obj.review_date = faker.date.past();
  obj.reviewer = faker.name.findName();
  obj.review_title = faker.random.word(); 
  obj.reviews_number = faker.random.number();
  obj.review_viewers = faker.random.number();
  obj.review = faker.lorem.paragraph();
  obj.movie_description = faker.lorem.words();
  obj.movie_id = faker.random.number();
  return obj;
}


var t0 = thetimeisnow();

let i = 0;
write();
function write() {
  let ok = true;
  do {
    i++;
    if(i === 10000000) {
      writer.write(JSON.stringify(dataGenerator()), "utf8", () => {
        console.log("created data entry", i);
        console.log((thetimeisnow() - t0)/1000);
      });
    } else {
      ok = writer.write(JSON.stringify(dataGenerator()), "utf8");
    }
  } while(i < 10000000 && ok);
  if(i < 10000000) {
    writer.once("drain", write);
  }
}


    // setTimeout(() => {
    //   generate1Mdata(++j)
    // }, 500);
    //console.log('finished in' + (thetimeisnow() - t0)/1000 + 'milliseconds');





