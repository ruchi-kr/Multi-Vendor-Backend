const dayjs = require("dayjs");
const {
    AuthDal,
    RiderDetailsDal,
} = require("../../DAL");
const { CONSTANTS_MESSAGES, NOTIFICATIONS } = require("../../Helper");
const { JwtSign, ApiError, Utils } = require("../../Utils");
const { StatusCodes } = require("http-status-codes");
const { CONSTANTS } = require("../../Constant");
const { AdditionData } = require("../../Helper/user.helper");

const UserService = {

    AddRiderDetails: async (data) => {
        const existingRider = await RiderDetailsDal.findOne({ phone: data.phone });
        if (existingRider) {
            throw new ApiError(StatusCodes.CONFLICT, CONSTANTS_MESSAGES.USER_EXISTS);
        }
        const riderData = {
            phone: data.phone,
            country_code: data.country_code,
            earningsHistory: data.earningsHistory || [],
            createdAt: dayjs().toISOString(),
        };

        // Save rider details in the database
        const newRider = await RiderDetailsDal.create(riderData);

        return {
            message: CONSTANTS_MESSAGES.RIDER_ADDED_SUCCESSFULLY,
            rider: newRider,
        };

    },


}


module.exports = UserService;
