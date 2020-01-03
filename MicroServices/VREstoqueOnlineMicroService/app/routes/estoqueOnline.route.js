module.exports = app => {
    const cupomMedioController = require("../controller/estoqueOnline.controller");

    let rotaPadraoCupomMedio1 = "/api/v1/vrmasterserver/estoqueOnline";

    app.get(`${rotaPadraoCupomMedio1}/find`, cupomMedioController.getEstoqueOnline);
    console.log(`${rotaPadraoCupomMedio1}/find`, cupomMedioController.getEstoqueOnline);
}