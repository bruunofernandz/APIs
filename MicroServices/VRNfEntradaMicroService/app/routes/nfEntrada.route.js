module.exports = app => {
    const nfEntradaController = require("../controller/nfEntrada.controller");

    let rotaPadraoNfEntrada1 = "/api/v1/vrmasterserver/nfEntrada";

    app.get(`${rotaPadraoNfEntrada1}/find`, nfEntradaController.getnfEntrada);
    console.log(`${rotaPadraoNfEntrada1}/find`, nfEntradaController.getnfEntrada);
}