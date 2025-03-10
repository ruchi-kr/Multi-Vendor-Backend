const dayjs = require("dayjs");
const {
    AuthDal,
    BankDetailsDal,
    DeliveryAgentDetailsDal,
} = require("../../DAL");
const { CONSTANTS_MESSAGES, NOTIFICATIONS } = require("../../Helper");
const { JwtSign, ApiError, Utils } = require("../../Utils");
const { StatusCodes } = require("http-status-codes");
const { CONSTANTS } = require("../../Constant");

const DeliveryAgentService = {

    UpdateDeliveryAgentDetails: async (user, data) => {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const existingAgent = await DeliveryAgentDetailsDal.GetDeliveryAgentDetails({ _id: user.additional_detail });
            if (!existingAgent) {
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
             await DeliveryAgentDetailsDal.UpdateDeliveryAgentDetails(
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

        const agent = await DeliveryAgentDetailsDal.GetDeliveryAgentDetails({ _id: user.additional_detail });
        if (!agent) {
            throw new ApiError(CONSTANTS_MESSAGES.RESTAURANT_NOT_FOUND, StatusCodes.NOT_FOUND);
        }
        agent.availabilityStatus = data.availability_status;
        await agent.save();
        return { message: CONSTANTS_MESSAGES.AVAILABILITY_CHANGED_SUCCESSFULLY, agent };

    },


}


module.exports = DeliveryAgentService;
