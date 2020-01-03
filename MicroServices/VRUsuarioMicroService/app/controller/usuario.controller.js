const db = require("../config/db.config");
var _ = require("lodash");
const { bodyValidation } = require("../validation/bodyValidation");
const handlers = require("../error/error-handlers");
const Usuario = db.usuario;

exports.getUsuario = async (req, res) => {
  const { error } = bodyValidation(req.headers);

  if (error) return handlers.onError(res, error.details[0].message);

  let queryUsuario = "SELECT value FROM usuario WHERE 1=1";

  queryUsuario += FiltrarCampos(req.headers);

  Usuario.sequelize
    .query(queryUsuario)
    .then(vUsuarios => {
      const usuario = vUsuarios[0];

      res.send(usuario[0].value);

      console.log(usuario[0].value);
    })
    .catch(function(err) {
      res.status(500).json({ success: false, error: err });
    });
};

function FiltrarCampos(filtros) {
  let filtrosAnd = "";

  filtrosAnd += " AND id = " + filtros.hash;
  return filtrosAnd;
}
