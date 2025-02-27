const { RiderDetails } = require("../../models");

const RiderDetailsDal = {
  GetRiderDetails: async (query, params) => await RiderDetails.findOne(query).select(params),

  GetAllRiderDetails: async (query, params) => await RiderDetails.find().select(),

  // CreateRiderDetails: async (query, session = null) => {
  //   return await RiderDetails.create(query, session ? { session } : {});
  // },
  CreateRiderDetails: async (query) => await RiderDetails.create(query),
  // UpdateRiderDetails: async (filter, update, session = null) =>
  //   session ? await RiderDetails.updateOne(filter, update, { session }) : await RiderDetails.updateOne(filter, update),

  UpdateRiderDetails: async (filter, update, session) => await RiderDetails.updateOne(filter, update, { session }),
}

module.exports = RiderDetailsDal;