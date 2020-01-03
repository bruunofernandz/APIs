module.exports = app => {
    const consitenciaPdv = require('../controller/consistenciaPDV.controller');

    let rotaPadraoConsistencia1 = "/api/v1/vrmasterserver/consistenciaPDV";
    
    console.log(rotaPadraoConsistencia1 + "/find", consitenciaPdv.getConsistenciaPDV);
    app.get(rotaPadraoConsistencia1 + "/find", consitenciaPdv.getConsistenciaPDV);
};