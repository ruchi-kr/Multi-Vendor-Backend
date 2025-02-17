const Joi = require("joi");
const { CONSTANTS } = require("../../Constant");

const RiderSchema = {

    AddRiderDetails: Joi.object({

        userId : Joi.string().required(),

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
      
        driving_licence_details: Joi.object({
          license_number: Joi.string().regex(CONSTANTS.REGEX.DRIVING_LICENSE).required(),
          license_issue_date: Joi.date().required(),
          license_expiry_date: Joi.date().greater(Joi.ref("license_issue_date")).required(),
          license_document: Joi.string().required(),
        }).required(),
      
        vehicle_details: Joi.object({
          vehicle_type: Joi.string().required(),
          vehicle_number: Joi.string().required(),
          vehicle_owner_name: Joi.string().regex(CONSTANTS.REGEX.PERSON_NAME).required(),
          vehicle_model: Joi.string().required(),
        }).required(),
      
        current_full_address: Joi.object({
          addressLine: Joi.string().required(),
          apartment: Joi.string().required(),
          city: Joi.string().required(),
          state: Joi.string().required(),
          country: Joi.string().required(),
          pincode: Joi.string().regex(CONSTANTS.REGEX.PINCODE).required(),
        }).required(),
      
        permanent_full_address: Joi.object({
          addressLine: Joi.string().required(),
          apartment: Joi.string().required(),
          city: Joi.string().required(),
          state: Joi.string().required(),
          country: Joi.string().required(),
          pincode: Joi.string().regex(CONSTANTS.REGEX.PINCODE).required(),
        }).required(),
            
        accountDetails: Joi.object({
          bankName: Joi.string().required(),
          accountNumber: Joi.string().pattern(CONSTANTS.REGEX.BANK_ACCOUNT).required(),
          ifscCode: Joi.string().pattern(CONSTANTS.REGEX.IFSC).required(),
        }).required(),
        
            
        availabilityStatus: Joi.number()
          .valid(...Object.values(CONSTANTS.AVAILABILITY_STATUS))
          .default(CONSTANTS.AVAILABILITY_STATUS.AVAILABLE),
      
        location: Joi.object({
          type: Joi.string().valid(...Object.values(CONSTANTS.LOCATION)).optional(),
          coordinates: Joi.array().items(Joi.number()).length(2).optional(),
        }).optional(),
      
        aadhar_details: Joi.object({
          aadhar_number: Joi.string().regex(CONSTANTS.REGEX.AADHAR).required(),
          aadharFront: Joi.string().optional(),
          aadharBack: Joi.string().optional(),
        }).required(),
      
        pan_details: Joi.object({
          panNumber: Joi.string().regex(CONSTANTS.REGEX.PAN).required(),
          pan_document: Joi.string().optional(),
        }).required(),
      
    }),


}

module.exports = RiderSchema;
