const Joi = require("joi");
const { CONSTANTS } = require("../Constant");

const AuthSchema = {

    SendOtp: Joi.object().keys({
        phone: Joi.string().regex(CONSTANTS.REGEX.PHONE).required(),
        country_code: Joi.string().regex(CONSTANTS.REGEX.COUNTRY_CODE).required(),
    }),

    SignInWithOtp: Joi.object().keys({
        phone: Joi.string().regex(CONSTANTS.REGEX.PHONE).required(),
        country_code: Joi.string().regex(CONSTANTS.REGEX.COUNTRY_CODE).required(),
        otp: Joi.number().max(999999).required(),
        role: Joi.number().valid(...Object.values(CONSTANTS.ROLE)).required()
    }),

    SignUp: Joi.object().keys({
       email: Joi.string().email().required(),
       password: Joi.string().required(),
       confirm_password: Joi.string().valid(Joi.ref('password')).required(),
       role: Joi.number().valid(...Object.values(CONSTANTS.ROLE)).required()
    }),


    // LoginOtp: Joi.object().keys({       
    //     phone: Joi.string().regex(CONSTANTS.REGEX.PHONE).required(),
    //     country_code: Joi.string().regex(CONSTANTS.REGEX.COUNTRY_CODE).required(),        
    // }),
    SignIn: Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        role: Joi.number().valid(...Object.values(CONSTANTS.ROLE)).required()
    }),


}

module.exports = AuthSchema;
