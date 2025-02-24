const { UserService } = require("../../service");
const { StatusCodes } = require("http-status-codes");
const { CONSTANTS_MESSAGES } = require("../../Helper");
const { ResponseHandler } = require("../../Utils");
const { AddAddress } = require("../../Validation/user/user");

const UserController = {

    AddUserDetails: async (req, res) => {
        const body = req.body;
        const data = await UserService.AddUserDetails(body);
        ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.SUCCESS);
    },

    GetAllAddresses: async (req, res) => {
        const data = await UserService.GetAllAddresses(req.user);
        ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.SUCCESS);
    },

    GetUserAddress : async (req, res) => {
        const data = await UserService.GetUserAddress(req.params.id);
        ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.SUCCESS);
    },

    AddAddress: async (req, res) => {
        const body = req.body;
        const data = await UserService.AddAddress(body);
        ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.SUCCESS);
    },

    UpdateAddress: async (req, res) => {
        const body = req.body;      
        const data = await UserService.UpdateAddress(body);
        ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.SUCCESS);
    },

    DeleteAddress: async (req, res) => {
        const params = req.params.id;
        const data = await UserService.DeleteAddress(params, req.user);
        ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.SUCCESS);
    },

    DeleteAllAddress: async (req, res) => {
        const data = await UserService.DeleteAllAddress(req.user);
        ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.SUCCESS);
    },
    
};

module.exports = UserController;
