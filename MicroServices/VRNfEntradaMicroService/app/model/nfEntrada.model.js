module.exports = (sequelize) => {
    const data = sequelize.define('notafiscalentrada', {
        schema: 'public'
    });
    return data;
}