const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const app = express();

dotenv.config();

app.use(bodyParser.json());

app.disable("x-powered-by");

require("./app/routes/router")(app);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Listening port: ${process.env.SERVER_PORT}`);
});

