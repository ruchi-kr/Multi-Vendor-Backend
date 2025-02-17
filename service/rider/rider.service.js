const dayjs = require("dayjs");
const {
    AuthDal,
    RiderDetailsDal,
    BankDetailsDal,
} = require("../../DAL");
const { CONSTANTS_MESSAGES, NOTIFICATIONS } = require("../../Helper");
const mongoose = require('mongoose');
const { JwtSign, ApiError, Utils } = require("../../Utils");
const { StatusCodes } = require("http-status-codes");
const { CONSTANTS } = require("../../Constant");
const { AdditionData } = require("../../Helper/user.helper");

const RiderService = {
    // AddRiderDetails: async (data) => {
    //     console.log(data,"data")
    //     const session = await mongoose.startSession();
    //     session.startTransaction();
    //       const existingUser = await AuthDal.GetUser({ _id: data.userId });
    //       console.log(existingUser,"existingUser")
    //       const existingRider = await RiderDetailsDal.GetRiderDetails({_id: existingUser.additional_detail,});
    
    //       if (existingRider) {
    //         const isEmptyRider = !existingRider.basic_details && !existingRider.vehicle_details;
    //         if (isEmptyRider) {
    //           throw new ApiError(CONSTANTS_MESSAGES.USER_EXISTS, StatusCodes.CONFLICT);
    //         }
    //         const updatedRider = await RiderDetailsDal.UpdateRiderDetails(
    //           { _id: existingUser.additional_detail },
    //           data,
    //           { session } 
    //         );
            
    //         const newBankDetails = await BankDetailsDal.CreateBankDetails(data.accountDetails, { session });
    //         console.log(newBankDetails,"NEW BANK DETAILS")
    //         updatedRider.accountDetails = newBankDetails._id;
    
    //         await RiderDetailsDal.UpdateRiderDetails(
    //           { _id: existingUser.additional_detail },
    //           updatedRider,
    //           { session }
    //         );
    //         await session.commitTransaction();
    //         return updatedRider;
    //       }
    //       const newRider = await RiderDetailsDal.CreateRiderDetails(data, { session });
        
    //       const newBankDetails = await BankDetailsDal.CreateBankDetails(data.accountDetails, { session });
    //       newRider.accountDetails = newBankDetails._id;
    //       await RiderDetailsDal.UpdateRiderDetails(
    //         { _id: newRider._id },
    //         newRider,
    //         { session }
    //       );
    //       await session.commitTransaction();
    //       return newRider;  
    //   },
    
    AddRiderDetails: async (data) => {
        console.log(data, "data"); 
        const session = await mongoose.startSession();
        session.startTransaction();
  
            const existingUser = await AuthDal.GetUser({ _id: data.userId });
            console.log(existingUser, "existingUser");
            console.log(data.accountDetails,"data.accountDetails")
    
            const existingRider = await RiderDetailsDal.GetRiderDetails({ _id: existingUser.additional_detail });
    
            if (existingRider) {
                const isEmptyRider = !existingRider.basic_details && !existingRider.vehicle_details;
                if (isEmptyRider) {
                    throw new ApiError(CONSTANTS_MESSAGES.USER_EXISTS, StatusCodes.CONFLICT);
                }
    
                // Create Bank Details First
                let newBankDetails = null;
                if (data.accountDetails) {

                    newBankDetails = await BankDetailsDal.CreateBankDetails(data.accountDetails, { session });
                    console.log(newBankDetails, "NEW BANK DETAILS");
                }
    
                // Update Rider Details
                const updatedData = { ...data };
                if (newBankDetails) updatedData.accountDetails = newBankDetails._id;
    
                const updatedRider = await RiderDetailsDal.UpdateRiderDetails(
                    { _id: existingUser.additional_detail },
                    updatedData,
                    { session }
                );
    
                await session.commitTransaction();
                session.endSession();
                return updatedRider;
            }
    
            // If Rider Doesn't Exist, Create New One
            const newRider = await RiderDetailsDal.CreateRiderDetails(data, { session });
    
            // Create Bank Details
            let newBankDetails = null;
            if (data.accountDetails) {
                newBankDetails = await BankDetailsDal.CreateBankDetails(data.accountDetails, { session });
                console.log(newBankDetails, "NEW BANK DETAILS");
            }
    
            if (newBankDetails) {
                await RiderDetailsDal.UpdateRiderDetails(
                    { _id: newRider._id },
                    { accountDetails: newBankDetails._id },
                    { session }
                );
            }
    
            await session.commitTransaction();
            session.endSession();
            return newRider;
      
    },
    


}


module.exports = RiderService;

