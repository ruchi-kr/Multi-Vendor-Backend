const mongoose = require("mongoose");
const { CONSTANTS } = require("../Constant");

const AddNewAddress = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  name: {
    type: Number,
    enum: Object.values(CONSTANTS.USER_ADDRESS_TYPE),
    required: true,
  },
  addressLine: {
    type: String,
    required: true,
  },

  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  //   country: {
  //     type: String,
  //     required: true,
  //   },
  phone_number: {
    type: String,
  },
  pin_code: {
    type: Number,
    required: true,
  },
  location: {
    type: {
      type: Number,
      enum: Object.values(CONSTANTS.LOCATION_TYPE),
      // required: true,
    },
    coordinates: {
      type: [Number],
      // required: true,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("user_addresses", AddNewAddress, "user_addresses");