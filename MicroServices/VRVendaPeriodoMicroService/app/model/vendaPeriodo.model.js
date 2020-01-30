module.exports = (sequelize) => {
    const Loja = sequelize.define('dados', {
        schema: 'public'
    })
    return Loja
}