const db = require("../config/db.config");
const { bodyValidation } = require("../validation/bodyValidation");
const handlers = require("../error/error-handlers");

const consumo = db.consumo;

exports.findConsumo = async (req, res, next) => {
  const { error } = bodyValidation(req.headers);

  if (error) return handlers.onError(res, error.details[0].message);

  let findDB;

  try {
    findDB = await findConsumo(req.headers);

    res.send(findDB);

    console.log(findDB);
  } catch (err) {
    res.status(500).json({ success: false, error: `${err}` });
  }

  next();
};

findConsumo = async hashClient => {
  return await consumo
    .findAll(
      { attributes: ["valor"], where: { id: hashClient.hash }})
    .then(finded => {
      console.log("Finded !");
      return finded;
    })
    .catch(err => {
      return Promise.reject(new Error(err));
    });
};
