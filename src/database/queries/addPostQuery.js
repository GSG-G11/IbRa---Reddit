const connection = require("../config/connection");

const addPostQuery = ( content, media, user_id ) => {
  const sqlQuery = {
    text: "INSERT INTO posts (content, media, user_id) VALUES ($1, $2, $3) RETURNING *",
    values: [content, media, user_id],
  };
  return connection.query(sqlQuery);
};

module.exports = addPostQuery;

