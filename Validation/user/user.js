const Joi = require("joi")
const { CONSTANTS } = require("../../Constant")

const UserSchema = {

    AddAddress: Joi.object().keys({
        user_id: Joi.string().required(),
        addressLine: Joi.string().required(),
        street: Joi.string().required(),
        city: Joi.string().optional(),
        state: Joi.string().optional(),
        pin_code: Joi.number().required(),
        phone_number: Joi.string().optional().allow(''),
        name: Joi.number().valid(...Object.values(CONSTANTS.USER_ADDRESS_TYPE)).required(),
        location: Joi.object().keys({
            type: Joi.number().valid(...Object.values(CONSTANTS.LOCATION_TYPE)).required(),
            coordinates: Joi.array().required().items(Joi.number().required()).length(2)
        }).required(),
       
    }),

    UpdateAddress: Joi.object().keys({
        user_id: Joi.string().required(),
        addressLine: Joi.string().required(),
        street: Joi.string().required(),
        city: Joi.string().optional(),
        state: Joi.string().optional(),
        pin_code: Joi.number().required(),
        name: Joi.number().valid(...Object.values(CONSTANTS.USER_ADDRESS_TYPE)).required(),
        phone_number: Joi.string().optional().allow(''),
        location: Joi.object().keys({
            type: Joi.number().valid(...Object.values(CONSTANTS.LOCATION_TYPE)).required(),
            coordinates: Joi.array().required().items(Joi.number().required()).length(2)
        }).required()
    }),

    UpdateProfile: Joi.object().keys({
        name: Joi.string().regex(CONSTANTS.REGEX.PERSON_NAME).optional(),
        email: Joi.string().email().optional(),
        phone: Joi.string().regex(CONSTANTS.REGEX.PHONE).optional(),
        country_code: Joi.string().regex(CONSTANTS.REGEX.COUNTRY_CODE).optional(),
        password : Joi.string().regex(CONSTANTS.PASSWORD_VALIDATION_REGEX).optional(),
        profile_image: Joi.string().optional(),
    }),
}

module.exports = UserSchema