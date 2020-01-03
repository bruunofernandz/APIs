var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var dotenv = require("dotenv");

dotenv.config();

app.use(bodyParser.json());

app.disable("x-powered-by");

require("./app/routes/loja.route")(app);

// Create a Server
var server = app.listen(process.env.SERVER_PORT, function() {
  console.log("Listening: " + process.env.SERVER_PORT);
});


module.exports = server;