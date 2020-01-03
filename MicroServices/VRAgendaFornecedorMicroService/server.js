const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

app.use(bodyParser.json());

app.disable('x-powered-by');

require("./app/routes/agendaForn.route")(app);

const server = app.listen(process.env.SERVER_PORT, () => {
    console.log(`Listening port: ` + process.env.SERVER_PORT);    
});

module.exports = server;