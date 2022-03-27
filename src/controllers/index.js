const { comparePasswordWithHashed, hashPassword } = require("./hashPassword");
const { generateToken, checkToken } = require("./generateToken");
const  createUser  = require("./auth");

module.exports = {
  comparePasswordWithHashed,
  hashPassword,
  generateToken,
  checkToken,
  createUser,
};
