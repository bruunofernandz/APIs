var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var dotenv = require("dotenv");

dotenv.config();

app.use(bodyParser.json());

app.disable("x-powered-by");

require("./app/routes/vendapdv.route.js")(app);

// Create a Server
var server = app.listen(process.env.SERVER_PORT, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});


module.exports = server;