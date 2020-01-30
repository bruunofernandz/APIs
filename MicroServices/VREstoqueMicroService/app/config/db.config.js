const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    timestamp: false,
    port: process.env.DB_PORT,
    define: {
      timestamp: false,
      freezeTableName: true
    },

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("DB connection sucessful");
  })
  .catch(() => {
    setTimeout(() => {
      process.kill(process.pid, "SIGTERM");
    }, 300);
    return Promise.reject(
      "Error ao conectar com o banco de dados: " + process.env.DB_HOST
    );
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.estoque = require("../model/estoque.model")(
  sequelize,
  Sequelize
);

module.exports = db;
