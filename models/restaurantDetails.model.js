const mongoose = require('mongoose');
// const discountSchema = require("./discountSchema");
// const {dish} = require('../../models');
const { CONSTANTS } = require('../Constant');

const restaurantDetailsSchema = new mongoose.Schema({
    restaurantDetails: {
        restaurantName: {
            type: String,
        },
    },

    full_restaurant_address: {
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
        required: false,
    },

    availabilityStatus: {
        type: String,
        default: CONSTANTS.AVAILABILITY_STATUS.AVAILABLE,
    },

    location: {
        type: {
            type: String,
            enum: Object.values(CONSTANTS.LOCATION_TYPE),
            // required: true,
        },
        coordinates: {
            type: [Number],
            // required: true,
        },
    },

    img: String,
    description: String,
    openingTime: String,
    closingTime: String,

    dishTypes: {
        type: [String],
        enum: Object.values(CONSTANTS.DISH_TYPE),
        // required: true,
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
                return !isNaN(value);
            },
            message: "Invalid value for current_rating. Must be a valid number.",
        },
    },

    totalProducts: Number,
    totalSales: Number,

    createdAt: {
        type: Date,
        default: Date.now,
    },

    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('restaurant_details', restaurantDetailsSchema, "restaurant_details");
