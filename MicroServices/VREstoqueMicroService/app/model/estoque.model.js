module.exports = (sequelize, Sequelize) => {
  const data = sequelize.define("dados", { schema: "public" });

  return data;
};
