const db = require("../config/db.config");
var _ = require("lodash");
const { bodyValidation } = require("../validation/bodyValidation");
const handlers = require("../error/error-handlers");
const VendaPdv = db.vendapdv;

exports.getVendaPdv = async (req, res) => {
  const { error } = bodyValidation(req.headers);

  if (error) return handlers.onError(res, error.details[0].message);

  let queryVendaPdv = "SELECT value FROM vendapdv WHERE 1=1";

  queryVendaPdv += FiltrarCampos(req.headers);

  VendaPdv.sequelize
    .query(queryVendaPdv)
    .then(vVendaPdv => {
      const vendapdv = vVendaPdv[0];

      res.send(vendapdv[0].value);

      console.log(vendapdv[0].value);
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
