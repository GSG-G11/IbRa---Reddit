const { join } = require("path");
const app = require("../app");
const user = require('./userRoutes')
const router = require("express").Router();


router.use(user);


module.exports = router;
