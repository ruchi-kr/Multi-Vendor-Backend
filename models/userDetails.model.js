const mongoose = require("mongoose");
const {CONSTANTS} = require("../Constant");

const userDetailsSchema = new mongoose.Schema({
  addresses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user_addresses",
    },
  ],
  totalOrders: Number,
  totalAmountSpent: Number,
  preferences: [String],
  loyaltyPoints: Number,
  loyaltyPointsLog: [
    {
      pointsEarned: Number,
      earnedFrom: {
        type: String,
        enum: Object.values(CONSTANTS.EARNED_FROM)
      },
      earnedOn: {
        type: Date,
        default: Date.now, // Timestamp of when points were earned
      },
    },
  ],
  favoriteRestaurants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "restaurant_details",
    },
  ],
  favoriteDishes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "dishes",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user_details", userDetailsSchema, "user_details");
