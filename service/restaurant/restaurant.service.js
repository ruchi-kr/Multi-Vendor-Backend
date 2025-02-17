const dayjs = require("dayjs");
const {
    AuthDal,
    RestaurantDetailsDal,
} = require("../../DAL");
const { CONSTANTS_MESSAGES, NOTIFICATIONS } = require("../../Helper");
const { JwtSign, ApiError, Utils } = require("../../Utils");
const { StatusCodes } = require("http-status-codes");
const { CONSTANTS } = require("../../Constant");
const { AdditionData } = require("../../Helper/user.helper");

const RestaurantService = {

    AddRestaurantDetails: async (data) => {
        const existingRider = await RestaurantDetailsDal.findOne({ phone: data.phone });
        if (existingRider) {
            throw new ApiError(StatusCodes.CONFLICT, CONSTANTS_MESSAGES.USER_EXISTS);
        }
        const restaurantData = {
            phone: data.phone,
            country_code: data.country_code,
            earningsHistory: data.earningsHistory || [],
            createdAt: dayjs().toISOString(),
        };
        const newRestaurant = await RestaurantDetailsDal.CreateRestaurantDetails(restaurantData);
        return newRestaurant;
       
    },


}


module.exports = RestaurantService;
