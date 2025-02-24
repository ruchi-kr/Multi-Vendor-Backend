const {
    AuthDal,
    UserAddressDal,
    UserDetailsDal,
} = require("../../DAL");
const { CONSTANTS_MESSAGES, NOTIFICATIONS } = require("../../Helper");
const { ApiError, Utils } = require("../../Utils");
const { StatusCodes } = require("http-status-codes");
const { CONSTANTS } = require("../../Constant");

const UserService = {

    UpdateProfile: async (body, user) => {
     await AuthDal.UpdateUser({ _id: user._id }, body, "-__v -createdAt -updatedAt");       
    },

    GetUserAddress: async (id) => {
        const data = await UserAddressDal.GetUserAddress({ _id: id }, "-__v -createdAt -updatedAt");
        if (!data) {
            throw new ApiError(CONSTANTS_MESSAGES.USER_NOT_FOUND, StatusCodes.NOT_FOUND);
        }
        return data;
    },

    GetAllAddresses: async (user) => {
        const addresses = await UserAddressDal.GetAllAddresses({ _id: user._id }, "-__v -createdAt -updatedAt");
        if (!addresses) {
            throw new ApiError(CONSTANTS_MESSAGES.USER_NOT_FOUND, StatusCodes.NOT_FOUND);
        }
        return addresses;
    },

    AddAddress: async (body) => {
        const data = await UserAddressDal.CreateUserAddress(body);
        const user = await AuthDal.GetUser({ _id: body.user_id }, "-__v -createdAt -updatedAt");
        const userDetails = await UserDetailsDal.GetUserDetails({ _id: user.additional_detail }, "-__v -createdAt -updatedAt");
        if (!userDetails) {
            throw new ApiError(CONSTANTS_MESSAGES.USER_DETAILS_NOT_FOUND, StatusCodes.NOT_FOUND);
        }
        userDetails.addresses.push(data._id);
        await userDetails.save();
        return data;
    },

    UpdateAddress: async (body) => {
        const data = await UserAddressDal.UpdateUserAddress({ _id: body.user_id }, body, "-__v -createdAt -updatedAt");
        return data;
    },

    DeleteAddress: async (params, user) => {
        const userDetails = await UserDetailsDal.GetUserDetails({ _id: user.additional_detail }, "-__v -createdAt -updatedAt");
        if (!userDetails) {
            throw new ApiError(CONSTANTS_MESSAGES.USER_DETAILS_NOT_FOUND, StatusCodes.NOT_FOUND);
        }
        const index = userDetails.addresses.indexOf(params);
        if (index !== -1) {
            userDetails.addresses.splice(index, 1);
            await userDetails.save();
        }
        await UserAddressDal.DeleteUserAddress({ _id: params }, "-__v -createdAt -updatedAt");
    },

    DeleteAllAddress: async (user) => {
        const userDetails = await UserDetailsDal.GetUserDetails({ _id: user.additional_detail }, "-__v -createdAt -updatedAt");
        if (!userDetails) {
            throw new ApiError(CONSTANTS_MESSAGES.USER_DETAILS_NOT_FOUND, StatusCodes.NOT_FOUND);
        }
        userDetails.addresses = [];
        await userDetails.save();
        const data = await UserAddressDal.DeleteAllUserAddress({ user_id: user._id }, "-__v -createdAt -updatedAt");
        return data;
    },

}


module.exports = UserService;
