const db = require("../config/db.config");
const { bodyValidation } = require("../validation/bodyValidation");
const handlers = require("../error/error-handlers");

const estoque = db.estoque;

exports.findEstoque = async (req, res) => {
  const { error } = bodyValidation(req.headers);

  if (error) return handlers.onError(res, error.details[0].message);

  let findDB;

  try {
    findDB = await findEstoque(req.headers);

    res.send(findDB);

    console.log(findDB);
  } catch (err) {
    return res.status(500).json({ success: false, error: `${err}` });
  }
};

findEstoque = async hashClient => {
  return await estoque
    .findAll({ attributes: ["value"], where: { id: hashClient.hash } })
    .then(finded => {
      console.log("Finded");
      return finded;
    })
    .catch(err => {
      return Promise.reject(new Error(err));
    });
};
