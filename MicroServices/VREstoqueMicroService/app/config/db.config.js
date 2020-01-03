const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: 5432,
    timestamps: false,
    dialect: "postgres",
    define: {
      timestamps: true,
      freezeTableName: true
    },

    pool: {
      min: 0,
      max: 5,
      acquire: 30000,
      iddle: 10000
    }
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("DB connection sucessful");
  })
  .catch(err => {
    setTimeout(() => {
      process.kill(process.pid, "SIGTERM");
    });
    return Promise.reject(
      "Error ao conectar com o banco de dados: " + process.env.DB_HOST
    );
  });

let db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.estoque = require("../model/estoque.model")(sequelize, Sequelize);

module.exports = db;
