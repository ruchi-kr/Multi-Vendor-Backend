const { VendorDetails } = require("../../models");

const VendorDetailsDal = {
  GetVendorDetails: async (query, params) => await VendorDetails.findOne(query).select(params),
  
  GetAllVendorDetails: async (query, params) => await VendorDetails.find().select(),
  
  CreateVendorDetails: async (query) => await VendorDetails.create(query),

  UpdateVendorDetails: async (filter,update) => await VendorDetails.updateOne(filter,update),

//   DeleteOTP : async (query) =>  await otp.findByIdAndDelete(query),

}

module.exports = VendorDetailsDal;