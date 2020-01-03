module.exports = app => {
    const nfSaidaController = require("../controller/nfSaida.controller");

    let rotaPadraoNfSaida1 = "/api/v1/vrmasterserver/nfSaida";

    app.get(rotaPadraoNfSaida1 + "/find", nfSaidaController.getnfSaida);
}