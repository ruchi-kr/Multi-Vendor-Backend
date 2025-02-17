const mongoose = require("mongoose");
const {CONSTANTS} = require("../Constant");

const deliveryAgentDetailsSchema = new mongoose.Schema({
 
  agent_name: String,
  // t_shirt_size:{
  //   type: String,    
  //   // enum: Object.values(CONSTANTS.T_SHIRT_SIZE) ,
  // },
  vehicleDetails: {
    vehicle_type: String,
    vehicle_number: String,
    vehicle_owner_name: String,
    vehicle_age_years: Number,
    emission_norm: String,
    fuel_type: String,
    vehicle_reg_authority: String,
  },
  full_address:{
    addressLine1: String,
    addressLine2: String,
    landmark: String,
    city: String,
    state: String,
    pincode: Number
  },
  document: [{ type: String }],
  accountDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "bank_details",
  },
  assignedOrders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "orders",
    },
  ],
  availabilityStatus: {
    type: String,
    enum: Object.values(CONSTANTS.AVAILABILITY_STATUS),
    default: "Available",
  },
  location: {
    type: {
      type: String,
      enum: Object.values(CONSTANTS.LOCATION),
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
      rating: { type: Number, required: true },
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
  gender: {
    type: String,
    enum: Object.values(CONSTANTS.GENDER),
    // required: true,
    default: "Male",
  },
  aadharNumber: {
    type: Number,
    // required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^[0-9]{12}$/.test(v);
      },
      message: "Aadhar number should be 12 digits long.",
    },
  },
  panNumber: {
    type: String,
    // required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(v);
      },
      message: "PAN number should be in the format ABCDE1234A.",
    },
  },
  dateOfBirth:{
    type: Date,
    // required: true,
    // validate: {
    //   validator: function (v) {
    //     return moment(v).isValid();
    //   },
    //   message: "Date of birth should be a valid date.",
    // },
  },
  requestedOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'orders' }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
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
});

module.exports = mongoose.model(
  "vendor_details",
  deliveryAgentDetailsSchema,
  "vendor_details"
);
