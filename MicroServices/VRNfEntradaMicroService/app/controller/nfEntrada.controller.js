const db = require("../config/db.config");
const { bodyValidation } = require("../validation/bodyValidation");
const handlers = require("../error/error-handlers");

const nfEntrada = db.nfEntrada;

exports.getnfEntrada = async (req, res) => {
  const { error } = bodyValidation(req.headers);

  if (error) return handlers.onError(res, error.details[0].message);

  let queryNfEntrada = " SELECT value FROM nfentrada WHERE 1 = 1 ";

  queryNfEntrada += FiltrarCampo(req.headers);

  await nfEntrada.sequelize
    .query(queryNfEntrada)
    .then(nfEntradaLista => {
      const lista = nfEntradaLista[0];

      res.send(lista[0].value);

      console.log(lista[0].value);
    })
    .catch(err => {
      res.status(500).json({ success: false, error: err });
    });
};

function FiltrarCampo(filtros) {
  let filtrosAnd = "";

  filtrosAnd += ` AND id = ${filtros.hash} `;

  return filtrosAnd;
}
