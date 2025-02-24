const { PublicService } = require("../../service");
const { StatusCodes } = require("http-status-codes");
const { CONSTANTS_MESSAGES } = require("../../Helper");
const { ResponseHandler } = require("../../Utils");

const PublicController = {

  GetFileSize: async (req, res) => {
    const data = await PublicService.GetFileSize()
    ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.SUCCESS);
  },

  UploadFile: async (req, res) => {
    const data = await PublicService.UploadFile(req.user, req.files)
    ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.SUCCESS);
  },

  

};

module.exports = PublicController;
