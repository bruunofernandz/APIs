const db = require("../config/db.config");
const { bodyValidation } = require("../validation/bodyValidation");
const handlers = require("../error/error-handlers");

const consistenciaPDV = db.consistenciaPDV;

exports.getConsistenciaPDV = async (req, res) => {
  const { error } = bodyValidation(req.headers);

  if (error) return handlers.onError(res, error.details[0].message);

  let queryConsistencia = " SELECT value FROM dados WHERE 1 = 1";

  queryConsistencia += FiltrarCampos(req.headers);

  await consistenciaPDV.sequelize
    .query(queryConsistencia)
    .then(consistencia => {
      const lista = consistencia[0];

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
