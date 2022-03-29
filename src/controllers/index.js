const { comparePasswordWithHashed, hashPassword } = require("./hashPassword");
const { generateToken, checkToken } = require("./generateToken");
const createUser = require("./auth");
const login = require("./login");
const getPosts = require("./getAllPosts");
const addPost = require("./addPosts")

module.exports = {
  comparePasswordWithHashed,
  hashPassword,
  generateToken,
  checkToken,
  createUser,
  login,
  getPosts,
  addPost,
};
