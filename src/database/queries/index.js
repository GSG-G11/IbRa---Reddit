const RegisterUserQuery = require("./RegisterUserQuery");
const checkIfEmailAlreadyExistsQuery = require("./checkIfUserAlreadyExistsQuery");
const getPostsQuery = require("./getPostsQuery");
const addPostQuery = require("./addPostQuery");



module.exports = {
  RegisterUserQuery,
  checkIfEmailAlreadyExistsQuery,
  getPostsQuery,
  addPostQuery,
};
