const { UserAddresses } = require("../../models");

const UserAddressDal = {
  GetUserAddress: async (query, params) => await UserAddresses.findOne(query).select(params),
  
  GetAllAddresses: async (query, params) => await UserAddresses.find().select(),
  
  CreateUserAddress: async (query) => await UserAddresses.create(query),

  UpdateUserAddress: async (filter,update) => await UserAddresses.updateOne(filter,update),

  DeleteUserAddress : async (query) =>  await UserAddresses.findByIdAndDelete(query),

  DeleteAllUserAddress : async (query) =>  await UserAddresses.deleteMany(query),

}

module.exports = UserAddressDal;