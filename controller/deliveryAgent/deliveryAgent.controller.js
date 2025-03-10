const { DeliveryAgentService } = require("../../service");
const { StatusCodes } = require("http-status-codes");
const { CONSTANTS_MESSAGES } = require("../../Helper");
const { ResponseHandler } = require("../../Utils");
const { ChangeAvailabilty } = require("../restaurant/restaurant.controller");

const DeliveryAgentController = {

    UpdateDeliveryAgentDetails: async (req, res) => {
        const body = req.body;
        const data = await DeliveryAgentService.UpdateDeliveryAgentDetails(req.user, body);
        ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.DELIVERY_AGENT_ADDED_SUCCESSFULLY);
    },

    ChangeAvailabilty: async (req, res) => {
        const body = req.body;
        const data = await DeliveryAgentService.ChangeAvailabilty(req.user, body);
        ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.AVAILABILITY_CHANGED_SUCCESSFULLY);
    },
};

module.exports = DeliveryAgentController;
