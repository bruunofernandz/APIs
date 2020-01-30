const db = require("../config/db.config");
const { bodyValidation } = require("../validation/bodyValidation");
const handlers = require("../error/error-handlers");

const estoqueOnline = db.estoqueOnline;

exports.getEstoqueOnline = async (req, res) => {
  const { error } = bodyValidation(req.headers);

  if (error) return handlers.onError(res, error.details[0].message);

  let queryEstoqueOnline = " SELECT value FROM dados WHERE 1 = 1 ";

  queryEstoqueOnline += FiltrarCampo(req.headers);

  await estoqueOnline.sequelize
    .query(queryEstoqueOnline)
    .then(estoqueOnlineLista => {
      const lista = estoqueOnlineLista[0];

      res.send(lista[0].value);

      console.log(lista[0].value);
    })
    .catch(err => {
      res.status(500).json({ success: false, error: err });
    });
};

function FiltrarCampo(filtros) {
    let filtrosAnd = '';

    filtrosAnd += ` AND id_cliente = ${filtros.hash} `;

    return filtrosAnd;
}
