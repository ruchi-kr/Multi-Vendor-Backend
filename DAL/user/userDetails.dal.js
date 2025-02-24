const { UserDetails } = require("../../models");
// const {otp} = require("../models");

const UserDetailsDal = {
  GetUserDetails: async (query, params) => await UserDetails.findOne(query).select(params),
  
  GetAllUser: async (query, params) => await UserDetails.find().select(),
  
  CreateUserDetails: async (query) => await UserDetails.create(query),

  UpdateUser: async (filter,update) => await UserDetails.updateOne(filter,update),

//   DeleteOTP : async (query) =>  await otp.findByIdAndDelete(query),

}

module.exports = UserDetailsDal;