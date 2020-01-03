module.exports = (sequelize) => {
    const data = sequelize.define("cupomMedio", {
        schema: "public"
    })
    return data;
}