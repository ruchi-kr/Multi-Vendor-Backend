const mongoose = require("mongoose");
const crypto = require("crypto");
const { CONSTANTS } = require("../Constant");
const config = require("../Config");
const encryptionKey = crypto.createHash('sha256').update(config.ENCRYPTION_KEY).digest();
const iv = crypto.randomBytes(16);

const UserSchema = new mongoose.Schema(
  {

    name: {
      type: String,
      required: false
    },

    email: {
      type: String,
      required: false,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: false,
      maxlength: 500,
      get: (v) => decrypt(v),
      set: (v) => encrypt(v),
    },

    phone: {
      type: Number,
      required: false
    },

    country_code: {
      type: String,
      required: false
    },

    profile_image: {
      type: String,
      required: false
    },

    role: {
      type: Number,
      enum: Object.values(CONSTANTS.ROLE),
      required: true
    },

    additional_detail: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      refPath: "additional_detail_model"
    },

    additional_detail_model: {
      type: String,
      enum: [
        "admin_details",
        "delivery_agent_details",
        "restaurant_details",
        "user_details",
        "rider_details",   // ✅ Added missing roles
        "vendor_details"
      ],
      required: true
    },

  },
  {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true }, 
  }
);

function encrypt(text) {
  if (!text) return "";
  const cipher = crypto.createCipheriv('aes-256-cbc', encryptionKey, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  const encryptedData = iv.toString('hex') + ':' + encrypted;
  return encryptedData;
}

// Function to decrypt the value
function decrypt(encryptedText) {
  if (!encryptedText) return "";
  // Split the stored value to extract IV and encrypted data
  const [ivHex, encrypted] = encryptedText.split(':');
  const iv = Buffer.from(ivHex, 'hex');
  const decipher = crypto.createDecipheriv('aes-256-cbc', encryptionKey, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}


module.exports = mongoose.model("users", UserSchema);
