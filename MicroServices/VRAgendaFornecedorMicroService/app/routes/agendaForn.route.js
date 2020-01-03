module.exports = app => {
    const agenda = require("../controller/agendaForn.controller");

    let rotaPadraoAgendaV1 = "/api/v1/vrmasterserver/agendaFornecedor";

    app.get(rotaPadraoAgendaV1 + "/find", agenda.getAgendaFornecedor);
}