module.exports = app => {
  const perdaQuebraController = require("../controller/perdaQuebra.controller");

  let rotaPerdaQuebra = "/api/v1/vrmasterserver/perdaQuebra";

  app.get(`${rotaPerdaQuebra}/find`, perdaQuebraController.findPerdaQuebra);
};
