const Joi = require('joi');
const loginValedationSchema = Joi.object({
    email: Joi.string().email().required(),
      password: Joi.string().min(8).required(),
})

const loginSchema = (dataObj) => loginValedationSchema.validateAsync(dataObj, { abortEarly: false })

module.exports = loginSchema;
