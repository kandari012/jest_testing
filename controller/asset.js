let fxn = require("../services.js/asset");

let httpStatus = require("http-status");

module.exports.getData = async (req, res) => {
  const result = await fxn.getFxn(req.body.cursor, req.body.limit);
  res.status(httpStatus.OK).json(result);
};
