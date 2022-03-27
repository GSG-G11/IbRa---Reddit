const connection = require("../config/connection");

const checkIfEmailAlreadyExistsQuery = (email) => {
  const sqlQuery = {
    text: 'SELECT * FROM users WHERE email = $1',
    values: [email],
  };
  return connection.query(sqlQuery);
};

module.exports = checkIfEmailAlreadyExistsQuery;
