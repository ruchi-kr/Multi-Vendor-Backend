const bcrypt = require("bcrypt");
const dayjs = require("dayjs");
const {
    AuthDal,

} = require("../../DAL");
const { CONSTANTS_MESSAGES, NOTIFICATIONS } = require("../../Helper");
const { JwtSign, ApiError, Utils } = require("../../Utils");
const { StatusCodes } = require("http-status-codes");
const { CONSTANTS } = require("../../Constant");
const  AdditionalData = require("../../Helper/user.helper");

const AuthService = {

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

    SignInWithOtp: async (data) => {
        const { phone, country_code, otp, role } = data;
        const existingOtp = await AuthDal.GetOTP({ phone, country_code }, "-__v -createdAt -expiresAt");
        if (!existingOtp || existingOtp.otp !== otp || dayjs().isAfter(dayjs(existingOtp.expiresAt))) {
            throw new ApiError(CONSTANTS_MESSAGES.INVALID_OTP, StatusCodes.BAD_REQUEST);
        }    
        await AuthDal.DeleteOTP(existingOtp._id);
        let user = await AuthDal.GetUser({ phone, country_code, role }, "-__v -createdAt -updatedAt");
        if (!user) {
            user = await AuthDal.CreateUser({
                phone,
                country_code,
                role,
                additional_detail_model: AdditionalData.getAdditionalDetailModel(role),
                email: null,
                password: null,
                profile_image: null,
                name: null
            });
            const additionalDetailsData = await AdditionalData.createAdditionalDetails(role, user._id);
            console.log(additionalDetailsData,"additionalDetailsData");
            user.additional_detail = additionalDetailsData._id;
            await user.save();
        }
        const token = await JwtSign({
            _id: user._id,
            phone: user.phone,
            country_code: user.country_code,
            role: user?.role,
        });
        return { token, user };
    },

    SignIn : async (data) => {
        const { email, password } = data;
        const user = await AuthDal.GetUser({ email }, "-__v -createdAt -updatedAt");
        if (!user) {
            throw new ApiError(CONSTANTS_MESSAGES.USER_NOT_FOUND, StatusCodes.NOT_FOUND);
        }
        const matched = await bcrypt.compare(password, user.password);
        if (!matched) {
            throw new ApiError(
                CONSTANTS_MESSAGES.WRONG_PASSWORD,
                StatusCodes.BAD_REQUEST
            );
        }
        const token = await JwtSign({
            _id: user._id,
            email: user.email,
            role: user?.role,
        });
        return { token, user };
    },

    SignUp: async (data) => {
        const { email, password, confirm_password, role } = data;
        if (password !== confirm_password) {
            throw new ApiError(CONSTANTS_MESSAGES.PASSWORD_MISMATCH, StatusCodes.BAD_REQUEST);
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await AuthDal.CreateUser({
            email,
            password: hashedPassword,
            role,
            additional_detail_model: AdditionData.getAdditionalDetailModel(role),
        });
        const additionalDetailsData = await AdditionData.createAdditionalDetails(role, user._id);
        user.additional_detail = additionalDetailsData._id;
        await user.save();
        // const token = await JwtSign({
        //     _id: user._id,
        //     email: user.email,
        //     role: user?.role,
        // });
        // return { token, user };
        return user;
    },


}


module.exports = AuthService;
