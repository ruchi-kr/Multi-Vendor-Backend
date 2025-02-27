const { AdminService } = require("../../service");
const { StatusCodes } = require("http-status-codes");
const { CONSTANTS_MESSAGES } = require("../../Helper");
const { ResponseHandler } = require("../../Utils");

const AdminController = {

    AddAdminDetails: async (req, res) => {
        const body = req.body;
        const data = await AdminService.AddAdminDetails(body);
        ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.SUCCESS);
    },

    GetSettings: async (req, res) => {
        const data = await AdminService.GetSettings();
        ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.SUCCESS);
    },

    EditSettings: async (req, res) => {
        const body = req.body;
        const params = req.params;
        const data = await AdminService.EditSettings(params, body);
        ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.SUCCESS);
    },

};

module.exports = AdminController;
