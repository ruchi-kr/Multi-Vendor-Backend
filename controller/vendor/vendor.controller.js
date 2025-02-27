const { VendorService } = require("../../service");
const { StatusCodes } = require("http-status-codes");
const { CONSTANTS_MESSAGES } = require("../../Helper");
const { ResponseHandler } = require("../../Utils");

const VendorController = {

    UpdateVendorDetails: async (req, res) => {
        const body = req.body;
        const data = await VendorService.UpdateVendorDetails(req.user, body);
        ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.VENDOR_ADDED_SUCCESSFULLY);
    },
};

module.exports = VendorController;
