module.exports = app => {
    const consumoController = require('../controller/consumo.controller');

    let rotaConsumo = '/api/v1/vrmasterserver/consumo';

    app.get(`${rotaConsumo}/find`, consumoController.findConsumo);
}