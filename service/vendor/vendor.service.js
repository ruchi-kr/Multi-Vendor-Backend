const {
    VendorDetailsDal,
    BankDetailsDal,
} = require("../../DAL");
const mongoose = require('mongoose');
const { CONSTANTS_MESSAGES, NOTIFICATIONS } = require("../../Helper");
const {  ApiError, Utils } = require("../../Utils");
const { StatusCodes } = require("http-status-codes");
const { CONSTANTS } = require("../../Constant");

const VendorService = {

    UpdateVendorDetails: async (user, data) => {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const existingVendor = await VendorDetailsDal.GetVendorDetails({ _id: user.additional_detail });
            if (!existingVendor) {
                throw new ApiError(CONSTANTS_MESSAGES.USER_NOT_FOUND, StatusCodes.NOT_FOUND);
            }
            const existingPan = await VendorDetailsDal.GetVendorDetails({ "pan_details.panNumber": data.pan_details.panNumber });
            console.log(existingPan,"existing pan")
            if (existingPan) {
              throw new ApiError(CONSTANTS_MESSAGES.PAN_ALREADY_EXISTS, StatusCodes.CONFLICT);
            }
        
            const existingAadhar = await VendorDetailsDal.GetVendorDetails({ "aadhar_details.aadhar_number": data.aadhar_details.aadhar_number });
            console.log(existingAadhar,"existing Aadhar")
            if (existingAadhar) {
              throw new ApiError(CONSTANTS_MESSAGES.AADHAR_ALREADY_EXISTS, StatusCodes.CONFLICT);
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
            const updatedVendor = await VendorDetailsDal.UpdateVendorDetails(
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

        const vendor = await VendorDetailsDal.GetVendorDetails({ _id: user.additional_detail });
        if (!vendor) {
            throw new ApiError(CONSTANTS_MESSAGES.RESTAURANT_NOT_FOUND, StatusCodes.NOT_FOUND);
        }
        vendor.availabilityStatus = data.availability_status;
        await vendor.save();
        return { message: CONSTANTS_MESSAGES.AVAILABILITY_CHANGED_SUCCESSFULLY, vendor };

    },

}


module.exports = VendorService;
