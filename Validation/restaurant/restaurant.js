const Joi = require("joi");
const { CONSTANTS } = require("../../Constant");

const RestaurantSchema = {

    AddRestaurantDetails: Joi.object({

        basic_details: Joi.object({
          driver_name: Joi.string().regex(CONSTANTS.REGEX.PERSON_NAME).required(),
          email: Joi.string().regex(CONSTANTS.REGEX.EMAIL).required(),
          dob: Joi.date().required(),
          gender: Joi.string().valid(...Object.values(CONSTANTS.GENDER)).required(),
          emergency_contact_number: Joi.string()
            .regex(CONSTANTS.REGEX.PHONE)
            .required(),
          blood_group: Joi.string().required(),
          profession: Joi.string().required(),
        }).required(),
      
    
    }),


}

module.exports = RestaurantSchema;
