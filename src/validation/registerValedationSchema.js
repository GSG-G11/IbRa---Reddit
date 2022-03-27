const Joi = require("joi");

const registerValedationSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  password: Joi.string()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
    .min(6)
    .required(),
});

const valedaionSchemaSighUP = (dataObj) = registerValedationSchema.validateAsync(dataObj,{
  abortEarly: false,
});

module.exports = valedaionSchemaSighUP;
