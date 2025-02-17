const { DeliveryAgentService } = require("../../service");
const { StatusCodes } = require("http-status-codes");
const { CONSTANTS_MESSAGES } = require("../../Helper");
const { ResponseHandler } = require("../../Utils");

const DeliveryAgentController = {

    AddDeliveryAgentDetails: async (req, res) => {
        const body = req.body;
        const data = await DeliveryAgentService.AddDeliveryAgentDetails(body);
        ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.DELIVERY_AGENT_ADDED_SUCCESSFULLY);
    },
};

module.exports = DeliveryAgentController;
