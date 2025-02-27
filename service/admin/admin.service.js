const {
    AuthDal,
    RiderDetailsDal,
    SystemSettingsDal,
} = require("../../DAL");
const { CONSTANTS_MESSAGES, NOTIFICATIONS } = require("../../Helper");
const { ApiError, Utils } = require("../../Utils");
const { StatusCodes } = require("http-status-codes");
const { CONSTANTS } = require("../../Constant");

const AdminService = {

    GetSettings: async () => await SystemSettingsDal.GetSettings({},"-__v -createdAt -updatedAt"),

    EditSettings: async (params, body) => {
       await SystemSettingsDal.EditSettings({ _id: params.id }, body);
    },

    

    
}


module.exports = AdminService;
