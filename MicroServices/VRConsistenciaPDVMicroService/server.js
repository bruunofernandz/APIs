const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

app.use(bodyParser.json());

app.disable("x-powered-by");

require("./app/routes/consistenciaPDV.route")(app);

//Create Server

const server = app.listen(process.env.SERVER_PORT, () => {
  console.log("Listening: " + process.env.SERVER_PORT);
});

module.exports = server;
