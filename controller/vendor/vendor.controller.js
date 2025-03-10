const { VendorService } = require("../../service");
const { StatusCodes } = require("http-status-codes");
const { CONSTANTS_MESSAGES } = require("../../Helper");
const { ResponseHandler } = require("../../Utils");
const { ChangeAvailabilty } = require("../restaurant/restaurant.controller");

const VendorController = {

    UpdateVendorDetails: async (req, res) => {
        const body = req.body;
        const data = await VendorService.UpdateVendorDetails(req.user, body);
        ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.VENDOR_ADDED_SUCCESSFULLY);
    },

    ChangeAvailabilty: async (req, res) => {
        const body = req.body;
        const data = await VendorService.ChangeAvailabilty(req.user, body);
        ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.AVAILABILITY_CHANGED_SUCCESSFULLY);
    }
};

module.exports = VendorController;
