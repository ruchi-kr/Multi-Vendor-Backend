const { PublicService } = require("../../service");
const { StatusCodes } = require("http-status-codes");
const { CONSTANTS_MESSAGES } = require("../../Helper");
const { ResponseHandler } = require("../../Utils");

const PublicController = {
    
  GetStates: async (req, res) => {
    const data = await PublicService.GetStates()
    ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.SUCCESS);
  },

  GetRelations: async (req, res) => {
    const data = await PublicService.GetRelations()
    ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.SUCCESS);
  },

  GetAllPlan: async (req, res) => {
    const data = await PublicService.GetAllPlan(req.query);
    ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.SUCCESS);
  },

  GetHealthTest: async (req, res) => {
    const data = await PublicService.GetHealthTest()
    ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.SUCCESS);
  },

  GetFileSize: async (req, res) => {
    const data = await PublicService.GetFileSize()
    ResponseHandler(res, StatusCodes.OK, data, true, CONSTANTS_MESSAGES.SUCCESS);
  },


};

module.exports = PublicController;
