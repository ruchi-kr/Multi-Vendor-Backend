const dayjs = require("dayjs");
const {
    AuthDal,

} = require("../../DAL");
const { CONSTANTS_MESSAGES, NOTIFICATIONS } = require("../../Helper");
const {ApiError, Utils } = require("../../Utils");
const { StatusCodes } = require("http-status-codes");
const { CONSTANTS } = require("../../Constant");

const PublicService = {

    UploadFile: async (user, files) => {
        const uploadPromises = files?.map(async (file) => {
          console.log(file,"file");
          const token = await Utils.generateRandomToken();
          const role = Object.keys(CONSTANTS.ROLE).find(key => CONSTANTS.ROLE[key] === user.role);
          const fileName = `${role}/${token}/${file.originalname}`;
          return Utils.UploadFile(file, fileName, file.mimetype);
        });
        return await Promise.all(uploadPromises);
      },


}


module.exports = PublicService;
