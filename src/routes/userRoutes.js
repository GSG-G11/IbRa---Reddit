const express = require("express");
const { createUser, login, getPosts, addPost } = require("../controllers/");
const { isAuth, isNotAuth } = require("../middleware");
const path = require("path");
const router = express.Router();

router.post("/signup", isNotAuth, createUser);
router.post("/login", isNotAuth, login);
router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "login.html"));
});
router.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "register.html"));
});

router.get("/posts", isAuth, getPosts);
router.get('/posts' , )
router.post("/posts", isAuth, addPost);

module.exports = router;
