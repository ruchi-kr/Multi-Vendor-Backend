const { user } = require("../models");
const {otp} = require("../models");

const AuthDal = {
  GetUser: async (query, params) => await user.findOne(query).select(params),
  
  GetAllUser: async (query, params) => await user.find().select(),
  
  CreateUser: async (query) => await user.create(query),

  UpdateUser: async (filter,update) => await user.updateOne(filter,update),

  GetOTP : async (query, params) => await otp.findOne(query).select(params),

  CreateOTP : async (query) => await otp.create(query),

  UpdateOTP : async (filter,update) => await otp.findByIdAndUpdate(filter,update,{ new: true ,select: '-__v'}),

  DeleteOTP : async (query) =>  await otp.findByIdAndDelete(query),

}

module.exports = AuthDal;