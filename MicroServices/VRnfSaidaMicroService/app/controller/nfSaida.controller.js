const db = require("../config/db.config");
const { bodyValidation } = require("../validation/bodyValidation");
const handlers = require("../error/error-handlers");

const nfSaida = db.nfSaida;

exports.getnfSaida = async (req, res) => {
  const { error } = bodyValidation(req.headers);

  if (error) return handlers.onError(res, error.details[0].message);

  let queryNfSaida = " SELECT value FROM nfsaida WHERE 1 = 1 ";

  queryNfSaida += FiltrarCampo(req.headers);

  await nfSaida.sequelize
    .query(queryNfSaida)
    .then(nfSaidaLista => {
      const lista = nfSaidaLista[0];

      res.send(lista[0].value);

      console.log(lista[0].value);
    })
    .catch(err => {
      res.status(500).json({ success: false, error: err });
    });
};

function FiltrarCampo(filtros) {
  let filtrosAnd = "";

  filtrosAnd += " AND id = " + filtros.hash;

  return filtrosAnd;
}
