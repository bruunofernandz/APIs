module.exports = (sequelize, Sequelize) => {
    const Loja = sequelize.define('loja', {
        schema: 'public'
    })
    return Loja
}