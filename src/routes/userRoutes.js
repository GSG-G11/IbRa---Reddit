const express = require("express");
const { createUser } = require("../controllers/");

const router = express.Router();

router.post("/home", createUser);

module.exports = router;
