var express = require("express");
var markdown = require("markdown-js");

var app = express();
var port = process.env.PORT || 1337;

app.get('/', function (req, res) {
  res.render("index.jade");
});

app.listen(port, function() {
  console.log("Listening on " + port);
});