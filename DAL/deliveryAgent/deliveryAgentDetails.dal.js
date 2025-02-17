const { DeliveryAgentDetails } = require("../../models");

const DeliveryAgentDetailsDal = {
  GetDeliveryAgentDetails: async (query, params) => await DeliveryAgentDetails.findOne(query).select(params),
  
  GetAllDeliveryAgentDetails: async (query, params) => await DeliveryAgentDetails.find().select(),
  
  CreateDeliveryAgentDetails: async (query) => await DeliveryAgentDetails.create(query),

  UpdateDeliveryAgentDetails: async (filter,update) => await DeliveryAgentDetails.updateOne(filter,update),

//   DeleteOTP : async (query) =>  await otp.findByIdAndDelete(query),

}

module.exports = DeliveryAgentDetailsDal;