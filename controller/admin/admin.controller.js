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
};

module.exports = AdminController;
