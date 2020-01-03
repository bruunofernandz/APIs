module.exports = (sequelize) => {
    const data = sequelize.define('consistenciapdv', {
        schema: 'public'
    })
    return data
}