module.exports = (sequelize, Sequelize) => {
  const data = sequelize.define(
    "estoque",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      valor: {
        type: Sequelize.JSON,
        allowNull: false
      }
    },
    { timestamps: true, schema: "public" }
  );

  return data;
};
