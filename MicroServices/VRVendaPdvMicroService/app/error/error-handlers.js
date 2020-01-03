var HTTPStatus = require("http-status");

module.exports = {
  onError: function (res, message) {
    return res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json(message);
  },
  onSuccess: function (res, message) {
    return res.status(HTTPStatus.OK).json(message);
  },
  onClienteFail: function (res) {
    return res
      .status(HTTPStatus.BAD_REQUEST)
      .json("Codigo Cliente Inválido!");
  },
  
  onBadRequest: function (res, message) {
    return res.status(HTTPStatus.BAD_REQUEST).json(message);
  }
};
