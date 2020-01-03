module.exports = (sequelize) => {
    const data = sequelize.define('compra', {
        schema: 'public'
    })
    return data
}