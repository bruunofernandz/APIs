const db = require("../config/db.config");
const { bodyValidation } = require("../validation/bodyValidation");
const handlers = require("../error/error-handlers");

const cupomMedio = db.cupomMedio;

exports.getCupomMedio = async (req, res) => {

  const { error } = bodyValidation(req.headers);

  if (error) return handlers.onError(res, error.details[0].message);

  let queryCupomMedio = " SELECT value FROM dados WHERE 1 = 1 ";

  queryCupomMedio += FiltrarCampos(req.headers);

  await cupomMedio.sequelize
    .query(queryCupomMedio)
    .then(cupomLista => {
      const lista = cupomLista[0];

      res.send(lista[0].value);
      console.log(lista[0].value);
    })
    .catch(err => {
      res.send(500).json({ sucess: false, error: err });
    });
};

function FiltrarCampos(filtros) {
  let filtrosAnd = "";

  filtrosAnd += ` AND id_cliente = ${filtros.hash} `;
  return filtrosAnd;
}
