const { AuthService } = require("../../service");
const { StatusCodes } = require("http-status-codes");
const { CONSTANTS_MESSAGES } = require("../../Helper");
const { ResponseHandler } = require("../../Utils");
const { ForgotPassword } = require("../../Validation/common");

const AuthController = {

    SendOtp: async (req, res) => {
        const body = req.body;
        const data = await AuthService.SendOtp(body);
        ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.OTP_SEND_SUCCESS);
    },

    SignInWithOtp: async (req, res) => {
        const body = req.body;
        const data = await AuthService.SignInWithOtp(body);
        ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.SIGN_IN_SUCCESS);
    },

    SignUp: async (req, res) => {
        const body = req.body;
        const data = await AuthService.SignUp(body);
        ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.SIGN_UP_SUCCESS);
    },

    SignIn: async (req, res) => {
        const body = req.body;
        const data = await AuthService.SignIn(body);
        ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.SIGN_IN_SUCCESS);
    },

    ForgotPassword: async (req, res) => {
        const body = req.body;
        const data = await AuthService.ForgotPassword(body);
        ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.FORGOT_PASSWORD_SUCCESS);
    },

    GetProfile: async (req, res) => {
        const data = await AuthService.GetProfile(req.user);
        ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.SUCCESS);
    },

};

module.exports = AuthController;
