const express = require("express");
const dotenv = require("dotenv");
const bodyParder = require("body-parser");

const app = express();


dotenv.config();

app.use(bodyParder.json());

app.disable("x-powered-by");

require("./app/routes/estoqueOnline.route")(app);

const server = app.listen(process.env.SERVER_PORT, () => {
    console.log(`Listening: ${process.env.SERVER_PORT}`);
})

module.exports = server;