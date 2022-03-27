const { hash, compare } = require("bcrypt");

module.exports = {
  hashPassword: (password) => hash(password, 5), comparePasswordWithHashed: (password, hashedPassword) =>
    compare(password, hashedPassword),
};
