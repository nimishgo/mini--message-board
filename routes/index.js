const express = require("express");
const router = express.Router();

/* GET home page. */
const messages = [
  {
    text: "Hi!",
    user: "Nimish",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Yash",
    added: new Date(),
  },
];

router.get("/", function (req, res, next) {
  res.render("index", { title: "Message Board", messages: messages });
});

module.exports = router;
