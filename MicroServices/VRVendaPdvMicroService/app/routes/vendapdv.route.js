var mcache = require("memory-cache");

module.exports = function(app) {
  const vendapdv = require("../controller/vendapdv.controller");

  let rotaPadraoVendaPdvV1 = "/api/v1/vrmasterserver/vendapdv";

  /**
   * Route loja
   */
  app.get(`${rotaPadraoVendaPdvV1}/find`, vendapdv.getVendaPdv);
};
