require("env2")(".env");
const { SECERT_KEY } = process.env;
const {
  RegisterUserQuery,
  checkIfEmailAlreadyExistsQuery,
} = require("../database/queries");

const jwt = require("jsonwebtoken");
const { signupValidation } = require("../validation");

const { hashPassword } = require("./hashPassword");
const checkIfUserAlreadyExistsQuery = require("../database/queries/checkIfUserAlreadyExistsQuery");
const cutomizedError = require("../errors/cutomizedError");

// Creating a user
const createUser = (req, res) => {
  const { name, email, image, password } = req.body;
  signupValidation(req.body)
    .then(() => checkIfEmailAlreadyExistsQuery(email))
    .then((data) => {
      if (data.rowCount !== 0) {
        throw cutomizedError(400, "Email already exists");
      } else {
        return hashPassword(password);
      }
    })
    .then((hashPassword) => {
      return RegisterUserQuery(name, email, image, hashPassword);
    })
    .then((data) => {
      const id = data.rows[0].id;
      jwt.sign({ id, name, email }, SECERT_KEY, (err, token) => {
        if (err) {
          throw new Error("server error");
        } else {
          return res
            .cookie("ibraToken", token, { secure: true })
            .status(201)
            .json({ message: "user registerd successfully" });
        }
      });
    })
    .catch((err) => {
      if (err.message === "Email already exists") {
        return res.json({
          status: err.status,
          message: "email already exists",
        });
      }
    });
};

module.exports = createUser;
