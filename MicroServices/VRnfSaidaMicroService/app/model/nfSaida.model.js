module.exports = (sequelize) => {
    const data = sequelize.define('notafiscalsaida', {
        schema: 'public'
    });
    return data;
}