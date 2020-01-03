const db = require("../config/db.config");
const { bodyValidation } = require("../validation/bodyValidation");
const handlers = require("../error/error-handlers");

const consistenciaPDV = db.consistenciaPDV;

exports.getConsistenciaPDV = async (req, res) => {
  const { error } = bodyValidation(req.headers);

  if (error) return handlers.onError(res, error.details[0].message);

  let queryConsistencia = " SELECT value FROM consistenciapdv WHERE 1 = 1";

  /*
    Completa a query com os campos passados no body
     */

  queryConsistencia += FiltrarCampos(req.headers);

  /* 
    Faz a requisição no bd e retorna a resposta em json para o client
    */

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

  filtrosAnd += " AND id = " + filtros.hash;
  return filtrosAnd;
}
