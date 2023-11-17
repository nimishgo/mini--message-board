const express = require("express");
const router = express.Router();
const formatDate = require("../public/javascripts/formatData.js");

/* GET home page. */
const messages = [
  {
    text: "Hi!",
    user: "Nimish",
    added: formatDate(new Date()),
  },
  {
    text: "Hello World!",
    user: "Yash",
    added: formatDate(new Date()),
  },
];

console.log(messages);

router.get("/", function (req, res, next) {
  res.render("index", { title: "Message Board", messages: messages });
});

router.post("/new", function (req, res) {
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
