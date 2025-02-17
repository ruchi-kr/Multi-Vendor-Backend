const dayjs = require("dayjs");
const {
    AuthDal,
    DeliveryAgentDetailsDal,
} = require("../../DAL");
const { CONSTANTS_MESSAGES, NOTIFICATIONS } = require("../../Helper");
const { JwtSign, ApiError, Utils } = require("../../Utils");
const { StatusCodes } = require("http-status-codes");
const { CONSTANTS } = require("../../Constant");
const { AdditionData } = require("../../Helper/user.helper");

const DeliveryAgentService = {

    AddDeliveryAgentDetails: async (data) => {
        const existingRider = await DeliveryAgentDetailsDal.findOne({ phone: data.phone });
        if (existingRider) {
            throw new ApiError(StatusCodes.CONFLICT, CONSTANTS_MESSAGES.USER_EXISTS);
        }
        const deliveryAgentData = {
            phone: data.phone,
            country_code: data.country_code,
            earningsHistory: data.earningsHistory || [],
            createdAt: dayjs().toISOString(),
        };

        // Save rider details in the database
        const newAgent = await DeliveryAgentDetailsDal.create(deliveryAgentData);
        return newAgent;

        // return {
        //     message: CONSTANTS_MESSAGES.DELIVERY_AGENT_ADDED_SUCCESSFULLY,
        //     rider: newAgent,
        // };

    },


}


module.exports = DeliveryAgentService;
