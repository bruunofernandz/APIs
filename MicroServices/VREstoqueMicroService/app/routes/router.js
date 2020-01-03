module.exports = app => {
    const estoqueController = require('../controller/estoque.controller');

    let rotaEstoque = '/api/v1/vrmasterserver/estoque';

    app.get(`${rotaEstoque}/find`, estoqueController.findEstoque);
}