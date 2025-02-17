const mongoose = require("mongoose");

const ratingAndReviewSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "users",
	},
	orderId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "orders",
	},
	restaurantId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "restaurant_details", // Reference to the restaurant being reviewed
	},
	deliveryAgentId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "delivery_agent_details", // Reference to the delivery agent being reviewed
	},
	dishId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "dishes",
	},
	ratingDeliveryAgent: {
		type: Number,
	},
	ratingRestaurant: {
		type: Number,
	},
	ratingDish: {
		type: Number,
	},
	reviewText: {
		type: String,
		required: true,
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

// Export the RatingAndReview model
module.exports = mongoose.model("rating_and_reviews", ratingAndReviewSchema,"rating_and_reviews");