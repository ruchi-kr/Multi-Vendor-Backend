const { AdminDetails } = require("../../models");

const AdminDetailsDal = {
  GetAdminDetails: async (query, params) => await AdminDetails.findOne(query).select(params),
  
  GetAllAdminDetails: async (query, params) => await AdminDetails.find().select(),
  
  CreateAdminDetails: async (query) => await AdminDetails.create(query),

  UpdateAdminDetails: async (filter,update) => await AdminDetails.updateOne(filter,update),

//   DeleteOTP : async (query) =>  await otp.findByIdAndDelete(query),

}

module.exports = AdminDetailsDal;