module.exports = (sequelize) => {
    const Agenda = sequelize.define('agendafornecedor', {
        schema: 'public',
    });

    return Agenda;
}