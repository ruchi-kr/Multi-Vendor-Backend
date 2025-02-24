const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
const { uploadDocument } = require("./Cloudinary");
const {  CouponUsagesDal,  UserNotificationsDAL, ManagementNotificationsDAL, AdminNotificationsDAL } = require("../DAL");
const config = require("../Config");
const bcrypt = require("bcrypt");
const otpGenerator = require('otp-generator');

const Utils = {

    generateRandomToken: async () => { return uuidv4() },

    generateOTP: async () => { return otpGenerator.generate(4, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false }); },

    UploadFile: uploadDocument,
    //UploadMultiFile : uploadMultiDocuments,

    // getFileURL: getImageUrl,

    PayAmount: async (amount, user) => {
      const requestBody = {
        account_number: `${config.RAZORPAY_ACCOUNT_NUMBER}`,
        contact: {
          name: user.name,
          contact: "8756818378", //`${user.phone}`,
          email: "ust816@gmail.com", //user.email,
          type: 'customer'
        },
        amount: 100, //amount*100,
        currency: 'INR',
        purpose: 'refund',
        description: `Claim reimbursement for ${user.name}`,
        send_sms: true,
        send_email: true
      }
      return await axios({
        method: 'post',
        url: 'https://api.razorpay.com/v1/payout-links',
        headers: {
          'Content-Type': 'application/json'
        },
        auth: {
          username: config.RAZORPAY_KEY_ID_TO_PAY,
          password: config.RAZORPAY_KEY_SECRET_TO_PAY
        },
        data: requestBody
      })
    },

    GenerateHashedPassword : async (password) => {
      try{
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password,salt);
      }
      catch (error) {
        return null;
      }
    },  

    CreateCouponConsumption: async (coupon_id, user_id, plan_id, health_plan_id,amount,discount) => {
      await CouponUsagesDal.CreateCouponUsage({
        coupon: coupon_id,
        user: user_id,
        plan: plan_id,
        health_plan: health_plan_id,
        amount,
        discount
      })
    },

    CreateManagementNotification: async (user,message) => {
      ManagementNotificationsDAL.AddNotification({ user, message});
    },
    CreateUserNotification: async (user,message) => {
      UserNotificationsDAL.AddNotification({ user, message});
    },
    CreateAdminNotification: async (user,message) => {
      await AdminNotificationsDAL.AddNotification({ user, message});
    },
}

module.exports = Utils