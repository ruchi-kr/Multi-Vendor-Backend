const jwt = require("jsonwebtoken");
const config = require("../Config");
const { CONSTANTS_MESSAGES } = require("../Helper");
const { StatusCodes } = require("http-status-codes");
const { AuthDal } = require("../DAL");
const { ApiError } = require("../Utils");
const { ROLE } = require("../Constant/Constant");

const VendorAuth = async (req, res, next) => {

  try {
    const token = req.headers.authorization;
    if (!token || !token.startsWith('Bearer ')) {
      throw new ApiError(CONSTANTS_MESSAGES.UNAUTHORIZED, StatusCodes.UNAUTHORIZED);
    }
    const tokenValue = token.split(' ')[1];
    const decodedToken = await new Promise((resolve, reject) => {
      jwt.verify(tokenValue, config.JWT_PRIVATE_KEY, (err, decoded) => {
        if (err) reject(new ApiError(CONSTANTS_MESSAGES.INVALID_TOKEN, StatusCodes.UNAUTHORIZED));
        resolve(decoded);
      });
    });
    const { _id,role  } = decodedToken;
    const user = await AuthDal.GetUser({ _id });
    if (role !== ROLE.VENDOR) {
      throw new ApiError(CONSTANTS_MESSAGES.FORBIDDEN, StatusCodes.FORBIDDEN);
    }
    if (!user) {
      throw new ApiError(CONSTANTS_MESSAGES.USER_NOT_FOUND, StatusCodes.NOT_FOUND);
    }
    
    req.token = tokenValue;
    req.user = user;
    next();
  } catch (error) {
    console.error("Error in UserAuth middleware:", error);
    res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};


module.exports = VendorAuth;
