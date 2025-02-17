const Joi = require("joi")
const { CONSTANTS } = require("../../Constant")
const { CONSTANTS_MESSAGES } = require("../../Helper")

const UserSchema = {
   
    UpdateProfile: Joi.object().keys({
        name: Joi.string().allow(null, ""),
        dob: Joi.string().allow(null, ""),
        phone: Joi.string().allow(null, ""),
        country_code: Joi.string().allow(null, ""),
        email: Joi.string().allow(null, ""),
        profile_image: Joi.string().allow(null, ""),
        gender: Joi.number().valid(...Object.values(CONSTANTS.GENDER)).allow(null, ""),
        address: Joi.string().allow(null, ""),
        password: Joi.string().allow(null, ""),
        newPassword: Joi.when("password", {
            is: Joi.exist(),
            then: Joi.string()
            .pattern(CONSTANTS.PASSWORD_VALIDATION_REGEX)
            .message(CONSTANTS_MESSAGES.INVALID_PASSWORD)
            .invalid(Joi.ref("password"))
            .required(),
            otherwise: Joi.string().allow(null, "")
        }),
        state: Joi.number().allow(null, ""),
        city: Joi.string().allow(null, ""),
        pin_code: Joi.number().allow(null, ""),
        plan: Joi.object().optional(),
        verified: Joi.object().optional()
    })
    .min(1),
    
    ResetPassword: Joi.object().keys({
        password: Joi.string().required(),
        confirm_password: Joi.string().required().equal(Joi.ref('password')).messages({
            'any.only': 'Confirm password must match password'
        })
    }),
}

module.exports = UserSchema