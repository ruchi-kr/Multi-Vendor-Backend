const Joi = require("joi");
const {CONSTANTS} = require("../Constant");

const CommonSchema = {

    ParamsId: Joi.object().keys({
        id:Joi.string()
    }),
    
    Pagination: Joi.object().keys({
        search:Joi.string().optional(),
        page: Joi.string().regex(/^\d+$/).max(10000).optional(),
        pageSize: Joi.string().regex(/^\d+$/).max(1000).optional(),
        sortBy:Joi.string().optional(),
        sortOrder:Joi.string().optional(),
        stateSortOrder:Joi.string().optional(),
        sortStateBy:Joi.string().optional(),
        startDate: Joi.date().iso().less('now').optional(),      
        endDate: Joi.date().iso().greater(Joi.ref('startDate')).optional(), 
        internalStatus:Joi.string().max(4).optional()
    }),

    ForgotPassword: Joi.object().keys({
        key_type: Joi.number().valid(...Object.values(CONSTANTS.KEY_TYPE)).required(),
        email: Joi.when("key_type", {
            is: CONSTANTS.KEY_TYPE.PHONE,
            then: Joi.string().email().optional(),
            otherwise: Joi.string().email().required()
        }),
        phone: Joi.when("key_type", {
            is: CONSTANTS.KEY_TYPE.EMAIL,
            then: Joi.string().optional(),
            otherwise: Joi.string().required()
        }),
        country_code: Joi.when("key_type", {
            is: CONSTANTS.KEY_TYPE.PHONE,
            then: Joi.string().required(),
            otherwise: Joi.string().optional()
        }),
    }),
    UpdatePassword: Joi.object().keys({
        otp:Joi.number().max(999999).required(),
        email:Joi.string().email().required(),
        password: Joi.string().min(3).max(20).required()       
    }),

    VerifyPayment: Joi.object().keys({
        razorpay_order_id: Joi.string().required(),
        razorpay_payment_id: Joi.string().required(),
        razorpay_signature: Joi.string().required()
    }),

    PlanPagination: Joi.object().keys({
        search:Joi.string().min(0).max(50).optional(),
        page: Joi.string().regex(/^\d+$/).max(10000).optional(),
        pageSize: Joi.string().regex(/^\d+$/).max(1000).optional(),
        sortBy:Joi.string().optional(),
        sortOrder:Joi.string().optional(),
        corporateFilter:Joi.string().optional(),
    }),  

    ContactEmail: Joi.object().keys({
        email : Joi.string().regex(CONSTANTS.REGEX.EMAIL).required(),
    }),

}

module.exports = CommonSchema;

