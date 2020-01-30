const db = require("../config/db.config");
const { bodyValidation } = require("../validation/bodyValidation");
const handlers = require("../error/error-handlers");

const vendaPeriodo = db.vendaPeriodo;

exports.getVendaPeriodo = async (req, res) => {
  const { error } = bodyValidation(req.headers);

  if (error) return handlers.onError(res, error.details[0].message);

  let queryLoja = " SELECT value FROM dados WHERE 1 = 1";

  queryLoja += FiltrarCampos(req.headers);

  vendaPeriodo.sequelize
    .query(queryLoja)
    .then(venda => {
      const lista = venda[0];

      res.send(lista[0].value);

      console.log(lista[0].value);
    })
    .catch(err => {
      res.status(500).json({ sucess: false, error: err });
    });
};

function FiltrarCampos(filtros) {
  let filtrosAnd = "";

  filtrosAnd += " AND id_cliente = " + filtros.hash;
  return filtrosAnd;
}
