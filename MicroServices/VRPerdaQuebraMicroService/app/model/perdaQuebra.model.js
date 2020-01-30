module.exports = (sequelize, Sequelize) => {
  const data = sequelize.define(
    "dados",
    {
      id_cliente: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      valor: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },
    { timestamps: true, schema: "public" }
  );

  return data;
};
