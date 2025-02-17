const { RiderService } = require("../../service");
const { StatusCodes } = require("http-status-codes");
const { CONSTANTS_MESSAGES } = require("../../Helper");
const { ResponseHandler } = require("../../Utils");

const RiderController = {

    AddRiderDetails: async (req, res) => {
        const body = req.body;
        const data = await RiderService.AddRiderDetails(body);
        ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.RIDER_ADDED_SUCCESSFULLY);
    },
};

module.exports = RiderController;
