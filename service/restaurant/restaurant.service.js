const dayjs = require("dayjs");
const {
    AuthDal,
    BankDetailsDal,
    RestaurantDetailsDal,
} = require("../../DAL");
const { CONSTANTS_MESSAGES, NOTIFICATIONS } = require("../../Helper");
const { JwtSign, ApiError, Utils } = require("../../Utils");
const { StatusCodes } = require("http-status-codes");
const { CONSTANTS } = require("../../Constant");

const RestaurantService = {

    UpdateRiderDetails: async (user, data) => {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const existingRestaurant = await RestaurantDetailsDal.GetRestaurantDetails({ _id: user.additional_detail });
            if (!existingRestaurant) {
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
            await RestaurantDetailsDal.UpdateRestaurantDetails(
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

        const restaurant = await RestaurantDetailsDal.GetRestaurantDetails({ _id: user.additional_detail });
        if (!restaurant) {
            throw new ApiError(CONSTANTS_MESSAGES.RESTAURANT_NOT_FOUND, StatusCodes.NOT_FOUND);
        }
        restaurant.availabilityStatus = data.availability_status;
        await restaurant.save();
        return { message: CONSTANTS_MESSAGES.AVAILABILITY_CHANGED_SUCCESSFULLY, restaurant };

    },

}


module.exports = RestaurantService;
