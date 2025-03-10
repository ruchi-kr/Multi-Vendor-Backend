const { RestaurantDetails } = require("../../models");

const RestaurantDetailsDal = {
  GetRestaurantDetails: async (query, params) => await RestaurantDetails.findOne(query).select(params),
  
  GetAllRestaurantDetails: async (query, params) => await RestaurantDetails.find().select(),
  
  CreateRestaurantDetails: async (query) => await RestaurantDetails.create(query),

  UpdateRestaurantDetails:  async (filter, update, session) => await RestaurantDetails.updateOne(filter, update, { session }),
//   DeleteOTP : async (query) =>  await otp.findByIdAndDelete(query),

}

module.exports = RestaurantDetailsDal;