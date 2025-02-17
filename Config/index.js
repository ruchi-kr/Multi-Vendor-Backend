require("dotenv").config();

const config = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URL,
  VERSION: process.env.VERSION,
  JWT_PRIVATE_KEY: process.env.JWT_PRIVATE_KEY,
  JWT_TOKEN_VALIDITY: process.env.JWT_TOKEN_VALIDITY,
  WEB_URL: process.env.WEB_URL,
  OTP_VALIDITY: process.env.OTP_VALIDITY,
  ENCRYPTION_KEY: process.env.ENCRYPTION_KEY,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  CLOUD_NAME: process.env.CLOUD_NAME,
  CLOUDINARY_URL: process.env.CLOUDINARY_URL
};

module.exports = config;
