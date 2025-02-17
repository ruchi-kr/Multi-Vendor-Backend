const mongoose = require("mongoose");
const {CONSTANTS} = require("../Constant");

// Define the schema for an order item
const orderItemSchema = new mongoose.Schema({
  dishName: String,
  dishId: String,
  quantity: Number,
  price: Number,
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "restaurant_details",
  },
  offer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "offers", // Reference to the applied offer
  },
  finalItemPrice: Number, // Price after applying the offer
});
// Define the schema for customer information
const customerInfoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  // address: String,
  phone: String,
});
// Define the schema for delivery details
const deliveryDetailsSchema = new mongoose.Schema({
  deliveryAddress: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user_addresses",
    required: true,
  },

  orderTime: {
    type: Date,
    default: Date.now,
  },
  // deliveryStatus: {
  //   type: String,
  //   enum: Object.values(CONSTANTS.DELIVERY_STATUS),
  //   default: "Pending",
  // },
});
// Define the schema for applied coupon
const appliedCouponSchema = new mongoose.Schema({
  code: String,
  discountAmount: Number,
});

// Define the schema for an order
const serviceOrderSchema = new mongoose.Schema({
  customer: customerInfoSchema,
  items: [orderItemSchema],
  totalPrice: Number,
  discountedPrice: Number,
  coupon: appliedCouponSchema,
  paymentStatus: {
    type: String,
    enum: Object.values(CONSTANTS.PAYMENT_STATUS),
    default: "Pending",
  },
  paymentMode:{
    type: String,
    enum: Object.values(CONSTANTS.PAYMENT_MODE),
  },
  deliveryDetails: deliveryDetailsSchema,
  orderStatus: {
    type: String,
    enum: Object.values(CONSTANTS.SERVICE.ORDER_STATUS),
    default: "Placed",
  },
  assignedAgent: Object,
  estimatedDeliveryTime: Date, // New field
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the Order model
module.exports = mongoose.model("service_orders", serviceOrderSchema);
