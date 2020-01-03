module.exports = app => {
    const cupomMedioController = require("../controller/cupomMedio.controller");

    let rotaPadraoCupomMedio1 = "/api/v1/vrmasterserver/cupomMedio";

    console.log(rotaPadraoCupomMedio1 + "/find" , cupomMedioController.getCupomMedio);
    app.get(rotaPadraoCupomMedio1 + "/find" , cupomMedioController.getCupomMedio);
}