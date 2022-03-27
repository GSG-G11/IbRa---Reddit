const connection = require("../config/connection");

const RegisterUserQuery = (name, email, image, password) => {
  const sql = {
    text: "INSERT INTO users (name, email, image, password) values ($1, $2, $3, $4) RETURNING *",
    values: [name, email, image, password],
  };
  return connection.query(sql);
};

module.exports = RegisterUserQuery;
