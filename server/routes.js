var router = require("express").Router();
var controller = require("./controller.js");

router.route("/title").get(controller.get);

module.exports = router;
