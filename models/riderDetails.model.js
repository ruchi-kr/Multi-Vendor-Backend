const mongoose = require("mongoose");
const { CONSTANTS } = require("../Constant");
const { required } = require("joi");

const riderDetailsSchema = new mongoose.Schema({

  basic_details: {
    driver_name: String,
    email: String,
    dob: Date,
    gender: String,
    emergency_contact_number: String,
    blood_group: String,
    profession: String,
  },

  driving_licence_details: {
    license_number: String,
    license_issue_date: Date,
    license_expiry_date: Date,
    license_document: String
  },

  vehicle_details: {
    vehicle_type: String,
    vehicle_number: String,
    vehicle_owner_name: String,
    vehicle_model: String,
  },

  current_full_address: {
    addressLine: String,
    apartment: String,
    city: String,
    state: String,
    country: String,
    pincode: Number
  },

  permanent_full_address: {
    addressLine: String,
    apartment: String,
    city: String,
    state: String,
    country: String,
    pincode: Number
  },

  accountDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "bank_details",
    required:false
  },

  assignedOrders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ride_orders",
    },
  ],

  availabilityStatus: {
    type: Number,
    enum: Object.values(CONSTANTS.AVAILABILITY_STATUS),
    default: CONSTANTS.AVAILABILITY_STATUS.AVAILABLE,
  },

  location: {
    type: {
      type: String,
      enum: Object.values(CONSTANTS.LOCATION_TYPE),
      //   required: true,
    },
    coordinates: {
      type: [Number],
      //   required: true,
    },
  },

  ratingAndReview: [
    {
      review: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "rating_and_reviews",
      },
      rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
      },
    },
  ],

  current_rating: {
    type: Number,
    default: 0,
    validate: {
      validator: function (value) {
        return !isNaN(value); // Ensure the value is not NaN
      },
      message: "Invalid value for current_rating. Must be a valid number.",
    },
  },

  aadhar_details: {
    aadhar_number: {
      type: Number,
      unique: true,
    },
    aadharFront: String,
    aadharBack: String,
  },

  pan_details: {
    panNumber: {
      type: String,
      unique: true,
    },
    pan_document: String,
  },

  requestedOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'orders' }],

  ordersAccepted: [mongoose.Schema.Types.ObjectId], // Or just count
  ordersDelivered: [mongoose.Schema.Types.ObjectId], // Or just count
  totalEarnings: { type: Number, default: 0 },
  dailyEarnings: { type: Number, default: 0 },
  monthlyEarnings: { type: Number, default: 0 },

  earningsHistory: [{
    date: { type: Date, default: Date.now },
    earnings: Number,
  }],

  isVerified: {
    type: Boolean,
    default: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "rider_details",
  riderDetailsSchema,
  "rider_details"
);
