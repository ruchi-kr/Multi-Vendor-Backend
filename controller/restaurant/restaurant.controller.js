const { RestaurantService } = require("../../service");
const { StatusCodes } = require("http-status-codes");
const { CONSTANTS_MESSAGES } = require("../../Helper");
const { ResponseHandler } = require("../../Utils");

const RestaurantController = {

    UpdateRestaurantDetails: async (req, res) => {
        const body = req.body;
        const data = await RestaurantService.UpdateRestaurantDetails(req.user, body);
        ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.RESTAURANT_ADDED_SUCCESSFULLY);
    },


    ChangeAvailabilty: async (req, res) =>{
        const body = req.body;
        const data = await RestaurantService.ChangeAvailabilty(req.user, body);
        ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.AVAILABILITY_CHANGED_SUCCESSFULLY);

    }
};

module.exports = RestaurantController;
