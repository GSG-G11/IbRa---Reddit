require("env2")(".env");
const { compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { checkIfEmailAlreadyExistsQuery } = require("../database/queries");
const cutomizedError = require("../errors/cutomizedError");
const { loginSchema } = require("../validation");
const { SECERT_KEY } = process.env;

const login = (req, res) => {
  let id;
  const { email, password, name } = req.body;
  loginSchema(req.body)
    .then(() => checkIfEmailAlreadyExistsQuery(email))
    .then((data) => {
      id = data.rows[0].id;
      if (data.rowCount === 0) {
        throw cutomizedError(400, "Email does not exist");
      } else {
        const hashPassword = data.rows[0].password;
        console.log(hashPassword);
        return compare(password, hashPassword);
      }
    })
    .then((isAMatch) => {
      if (isAMatch) {
        sign({ id, name, email }, SECERT_KEY, (err, token) => {
          if (err) {
            throw new Error("server error");
          } else {
            console.log(token);
            return res
              .cookie("ibraToken", token, { secure: true })
              .status(201)
              .json({ message: "user registerd successfully" });
          }
        });
      } else if (!isAMatch) {
        throw cutomizedError(400, "Worng passowrd");
      }
    })
    .catch((err) => {
        console.log(err.message)
      if (err.message === "Worng passowrd") {
        return res.status(400).json({ message: "invalid password habibi" });
      }
      if (err.message === "Email does not exist") {
        return res.json({
          status: err.status,
          message: "Email does not exist",
        });
      }

      //   if (err.message == "ValidationError") {
      //     return res.json({
      //       status: 500,
      //       message: "ValidationError",
      //     });
      //   }
    });
};

module.exports = login;
