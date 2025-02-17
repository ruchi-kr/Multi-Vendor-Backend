const { RestaurantService } = require("../../service");
const { StatusCodes } = require("http-status-codes");
const { CONSTANTS_MESSAGES } = require("../../Helper");
const { ResponseHandler } = require("../../Utils");

const RestaurantController = {

    AddRestaurantDetails: async (req, res) => {
        const body = req.body;
        const data = await RestaurantService.AddRestaurantDetails(body);
        ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.RESTAURANT_ADDED_SUCCESSFULLY);
    },
};

module.exports = RestaurantController;
