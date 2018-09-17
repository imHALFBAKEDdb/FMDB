var body = require("body-parser");
var express = require("express");
var router = require("./routes");
var path = require("path");
var PORT = 3000;

const app = express();

app.use(body.urlencoded({ extended: true }));
app.use(body.json());
app.use(express.static(path.resolve(__dirname, "../dist")));
app.use("/api", router);

app.listen(PORT, () => {
  console.log("successfully connected to port 3000");
});

module.exports = app;
