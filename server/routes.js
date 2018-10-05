var router = require("express").Router();
var controller = require("./controller.js");

//mongo
router.route("/title/:id").get(controller.get);


//postgres
//router.route("/title/:id").get(controller.fetch);

module.exports = router;
