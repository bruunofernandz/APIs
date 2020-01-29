const db = require("../config/db.config");
var _ = require("lodash");
const { bodyValidation } = require("../validation/bodyValidation");
const handlers = require("../error/error-handlers");
const Loja = db.loja;

exports.getLoja = async (req, res) => {
  const { error } = bodyValidation(req.headers);

  if (error) return handlers.onError(res, error.details[0].message);

  let queryLoja = "SELECT value FROM dados WHERE 1=1";

  queryLoja += FiltrarCampos(req.headers);

  Loja.sequelize
    .query(queryLoja)
    .then(lojas => {
      const lista = lojas[0];

      res.send(lista[0].value);

      console.log(lista[0].value);
    })
    .catch(function(err) {
      res.status(500).json({ success: false, error: err });
    });
};

function FiltrarCampos(filtros) {
  let filtrosAnd = "";

  filtrosAnd += " AND id_cliente = " + filtros.hash;
  return filtrosAnd;
}
