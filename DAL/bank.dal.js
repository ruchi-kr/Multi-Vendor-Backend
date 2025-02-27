const { BankDetails } = require("../models");

const BankDetailsDal = {
  GetBankDetails: async (query, params) => await BankDetails.findOne(query).select(params),

  GetAllBankDetails: async (query, params) => await BankDetails.find().select(),

  // CreateBankDetails: async (query) => await BankDetails.create(query),

  // UpdateBankDetails: async (filter,update) => await BankDetails.updateOne(filter,update),

  CreateBankDetails: async (query, session) => {
    const result = await BankDetails.create([query], { session });
    return result;
    // return {...result}
  },

  UpdateBankDetails: async (filter, update, session = null) =>
    session ? await BankDetails.updateOne(filter, update, { session }) : await BankDetails.updateOne(filter, update),


  //   DeleteOTP : async (query) =>  await otp.findByIdAndDelete(query),

}

module.exports = BankDetailsDal;