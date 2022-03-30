const express = require("express");
const { createUser, login, getPosts, addPost } = require("../controllers/");
const { isAuth, isNotAuth } = require("../middleware");
const path = require("path");
const router = express.Router();

router.post("/signup", createUser);
router.post("/login", isNotAuth, login);
router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "login.html"));
});
router.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "register.html"));
});
router.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "home.html"));
});
router.get("/posts", isAuth, getPosts);
// router.get('/posts' , )
router.post("/addpost", isAuth, addPost);


module.exports = router;
