const dayjs = require("dayjs");
const {
    AuthDal,

} = require("../../DAL");
const { CONSTANTS_MESSAGES, NOTIFICATIONS } = require("../../Helper");
const { JwtSign, ApiError, Utils } = require("../../Utils");
const { StatusCodes } = require("http-status-codes");
const { CONSTANTS } = require("../../Constant");
const { AdditionData } = require("../../Helper/user.helper");

const PublicService = {

    SendOtp: async (data) => {
        const { phone, country_code } = data;
        const otp = await Utils.generateOTP();
        const existingOtp = await AuthDal.GetOTP({ phone, country_code }, "-__v -createdAt -expiresAt");
        if (existingOtp) {
            const updatedOtp = await AuthDal.UpdateOTP(existingOtp._id, { otp, expiresAt: Date.now() + 300000 });
            return updatedOtp;
        }
        const otpPayload = { phone, country_code, otp, expiresAt: Date.now() + 300000 };
        const otpBody = await AuthDal.CreateOTP(otpPayload);
        return otpBody;
    },


}


module.exports = PublicService;
