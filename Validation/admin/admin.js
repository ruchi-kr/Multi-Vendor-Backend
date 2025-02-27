const Joi = require("joi");
const { CONSTANTS } = require("../../Constant");

const AdminSchema = {

    EditSettings: Joi.object().keys({
        doc_size: Joi.number().integer().optional().allow(null),
        file_type: Joi.string().optional().allow(null),
        payment_modes: Joi.array().items(Joi.number().integer()).optional().allow(null),
        delivery_charge: Joi.number().optional().allow(null),
        min_order_amount: Joi.number().optional().allow(null),
        gst: Joi.number().optional().allow(null),
        convinience_fee: Joi.number().optional().allow(null)
    }),

}

module.exports = AdminSchema;
