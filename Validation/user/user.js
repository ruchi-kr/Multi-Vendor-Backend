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

    DeleteAddress: Joi.object().keys({
        user_id: Joi.string().required(),
    }),
}

module.exports = UserSchema