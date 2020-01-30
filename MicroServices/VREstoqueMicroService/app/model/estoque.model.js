module.exports = (sequelize, Sequelize) => {
  const data = sequelize.define(
    "dados",
    {
      id_cliente: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },

      value: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },
    { schema: "public" }
  );

  return data;
};
