const { RiderService } = require("../../service");
const { StatusCodes } = require("http-status-codes");
const { CONSTANTS_MESSAGES } = require("../../Helper");
const { ResponseHandler } = require("../../Utils");
const { ChangeAvailabilty } = require("../restaurant/restaurant.controller");

const RiderController = {

    UpdateRiderDetails: async (req, res) => {
        const body = req.body;
        const data = await RiderService.UpdateRiderDetails(req.user,body);
        ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.RIDER_ADDED_SUCCESSFULLY);
    },

    ChangeAvailabilty: async (req, res) => {
        const body = req.body;
        const data = await RiderService.ChangeAvailabilty(req.user, body);
        ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.AVAILABILITY_CHANGED_SUCCESSFULLY);
    },
    
};

module.exports = RiderController;
