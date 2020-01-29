module.exports = sequelize => {
  const data = sequelize.define("dados", {
    schema: "public"
  });
  return data;
};
