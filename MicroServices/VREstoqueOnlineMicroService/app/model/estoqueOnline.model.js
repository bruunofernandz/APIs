module.exports = (sequelize) => {
    const data = sequelize.define('estoqueonline', {
        schema: 'public'
    });
    return data;
}