var mcache = require('memory-cache');

module.exports = app => {
    const venda = require('../controller/vendaPeriodo.controller');

    let rotaPadraoVendaV1 = "/api/v1/vrmasterserver/vendaPeriodo";
    
    app.get(`${rotaPadraoVendaV1}/find`, venda.getVendaPeriodo);
};