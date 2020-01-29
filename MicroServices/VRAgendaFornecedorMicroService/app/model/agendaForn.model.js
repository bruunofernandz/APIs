module.exports = (sequelize) => {
  const Agenda = sequelize.define("dados", { schema: "public" });

  return Agenda;
};
