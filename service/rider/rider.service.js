const {
    RiderDetailsDal,
    BankDetailsDal,
} = require("../../DAL");
const { CONSTANTS_MESSAGES, NOTIFICATIONS } = require("../../Helper");
const mongoose = require('mongoose');
const { ApiError, Utils } = require("../../Utils");
const { StatusCodes } = require("http-status-codes");
const { CONSTANTS } = require("../../Constant");

const RiderService = {

    UpdateRiderDetails: async (user, data) => {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const existingRider = await RiderDetailsDal.GetRiderDetails({ _id: user.additional_detail });
            if (!existingRider) {
                throw new ApiError(CONSTANTS_MESSAGES.USER_NOT_FOUND, StatusCodes.NOT_FOUND);
            }
            let newBankDetails = null;
            const existingBank = await BankDetailsDal.GetBankDetails({ accountNumber: data.accountDetails.accountNumber });
            if (existingBank) {
                newBankDetails = existingBank;
            } else {
                newBankDetails = await BankDetailsDal.CreateBankDetails(data.accountDetails, session);
            }
            const bankId = newBankDetails[0]._id;
            const updatedData = { ...data, accountDetails: bankId };
           await RiderDetailsDal.UpdateRiderDetails(
                { _id: user.additional_detail },
                updatedData,
                session
            );
            await session.commitTransaction();
            session.endSession();
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    },

    ChangeAvailabilty: async (user, data) => {

        const rider = await RiderDetailsDal.GetRiderDetails({ _id: user.additional_detail });
        if (!rider) {
            throw new ApiError(CONSTANTS_MESSAGES.RESTAURANT_NOT_FOUND, StatusCodes.NOT_FOUND);
        }
        rider.availabilityStatus = data.availability_status;
        await rider.save();
        return { message: CONSTANTS_MESSAGES.AVAILABILITY_CHANGED_SUCCESSFULLY, rider };

    },


}


module.exports = RiderService;

