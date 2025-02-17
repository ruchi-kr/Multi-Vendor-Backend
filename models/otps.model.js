const mongoose = require("mongoose");
const config = require("../Config");

const OTPSchema = new mongoose.Schema({
	phone: {
		type: String,
		required: true,
	},
	country_code: {
		type: String,
		required: true,
	},
	otp: {
		type: Number,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		expires: config.OTP_VALIDITY, // The OTP will be automatically deleted after 5 minutes of its creation time
	},

	expiresAt: {
		type: Date,
		default: Date.now,
		expires: config.OTP_VALIDITY, // The OTP will be automatically deleted after 5 minutes of its creation time
	},
});

module.exports = mongoose.model("otps", OTPSchema);
