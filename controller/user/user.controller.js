const { UserService } = require("../../service");
const { StatusCodes } = require("http-status-codes");
const { CONSTANTS_MESSAGES } = require("../../Helper");
const { ResponseHandler } = require("../../Utils");

const UserController = {

    AddUserDetails: async (req, res) => {
        const body = req.body;
        const data = await UserService.AddUserDetails(body);
        ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.SUCCESS);
    },
};

module.exports = UserController;
