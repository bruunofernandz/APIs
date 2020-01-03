var mcache = require("memory-cache");

module.exports = function(app) {
  const loja = require("../controller/loja.controller");

  let rotaPadraoLojaV1 = "/api/v1/vrmasterserver/loja";

  /**
   * Route loja
   */
  app.get(`${rotaPadraoLojaV1}/find`, loja.getLoja);
};
