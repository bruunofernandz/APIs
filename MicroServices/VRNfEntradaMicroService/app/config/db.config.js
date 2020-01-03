const Sequelize = require("sequelize")
const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "postgres",
        timestamp: false,
        port: process.env.DB_PORT,
        define: {
            timestamp: false,
            freezeTableName: true,
        },

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        }
    }
);

sequelize.authenticate().then(() => {
    console.log("DB connection succefull");
}).catch(error => {
    setTimeout(() => {
        process.kill(process.pid, "SIGTERM")
    }, 300)
    return Promise.reject(`Erro ao conectar ao banco de dados, erro: ${error}` )
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.nfEntrada = require("../model/nfEntrada.model")(sequelize, Sequelize)

module.exports = db;