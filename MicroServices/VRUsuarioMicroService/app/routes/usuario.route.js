var mcache = require("memory-cache");

module.exports = function(app) {
  const usuario = require("../controller/usuario.controller");

  let rotaPadraoUsuarioV1 = "/api/v1/vrmasterserver/usuario";
  
  app.get(`${rotaPadraoUsuarioV1}/find`, usuario.getUsuario);
};
