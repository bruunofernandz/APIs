const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    timestamps: false,
    port: process.env.DB_PORT,
    define: {
      timestamps: false,
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
  .then(function() {
    console.log("DB connection sucessful.");
  })
  .catch(error => {
    setTimeout(() => {
      process.kill(process.pid, "SIGTERM");
    }, 300);
    return Promise.reject("Erro ao conectar com o banco de dados!");
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

 /*
 * Models/tables - produto
 */
db.usuario = require('../model/usuario.model.js')(sequelize, Sequelize);

module.exports = db;
