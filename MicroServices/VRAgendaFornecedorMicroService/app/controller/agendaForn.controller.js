const db = require("../config/db.config");
const { bodyValidation } = require("../validation/bodyValidation");
const handlers = require("../error/error-handlers");

const agendaFornecedor = db.agendaFornecedor;

exports.getAgendaFornecedor = async (req, res) => {
  const { error } = bodyValidation(req.headers);

  if (error) return handlers.onError(res, error.details[0].message);

  let queryAgenda = "SELECT value FROM agendafornecedor WHERE 1 = 1 ";

  queryAgenda += FiltrarCampos(req.headers);
  console.log(req.body);

  agendaFornecedor.sequelize
    .query(queryAgenda)
    .then(agenda => {
      const lista = agenda[0];

      res.send(lista[0].value);

      console.log(lista[0].value);
      
    })
    .catch(err => {
      res.status(500).json({ success: false, error: err });
    });
};

function FiltrarCampos(filtros) {
  let filtrosAnd = "";

  filtrosAnd += "AND id = " + filtros.hash;
  console.log(filtrosAnd.hash);

  return filtrosAnd;
}
