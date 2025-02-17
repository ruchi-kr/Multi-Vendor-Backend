const mongoose = require('mongoose');
const {CONSTANTS} = require("../Constant");

const dishSchema = new mongoose.Schema({
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'restaurant_details',
        required: true
    },
    dishName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
    available: {
        type: Boolean,
        default: true,
    },
    dishType: {
        type: String,
        enum: Object.values(CONSTANTS.DISH_TYPE),
        required: true,
    },
    category: {
        type: String,
        enum: Object.values(CONSTANTS.DISH_CATEGORY),
        required: true,
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
    image: {
        type: String,
    },
    isSpecial:{
        type: Boolean,
        default: false
    },
    isReccomended: {
        type: Boolean,
        default: false,
    },
    offerApplied: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'offers',
        allowNull: true,
        default: null,
    },
    revisedPrice: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});
// dishSchema.index({
//     name: "text",
//     description: "text",
//     tags: "text",
//   });
module.exports = mongoose.model('dishes', dishSchema);
