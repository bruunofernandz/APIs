module.exports = app => {
    const compraController = require('../controller/compra.controller');

    let rotaPadraoCompra1 = "/api/v1/vrmasterserver/compra";
    
    console.log(rotaPadraoCompra1 + "/find", compraController.getCompra);
    app.get(rotaPadraoCompra1 + "/find", compraController.getCompra);
};