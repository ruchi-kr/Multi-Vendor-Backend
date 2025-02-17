const mongoose = require("mongoose");
const {CONSTANTS} = require("../Constant");

const customerInfoSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    phone: String,
});

const OrderSchema = new mongoose.Schema({
    customer: customerInfoSchema,
    paymentStatus: {
        type: String,
        enum: Object.values(CONSTANTS.PAYMENT_STATUS),
        default: "Pending",
    },
    paymentMode: {
        type: String,
        enum: Object.values(CONSTANTS.PAYMENT_MODE),
    },

    order_additional_detail: {
        type: Object,
        required: false
    },

    order_additional_detail_model: {
        type: String,
        required: true
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

module.exports = mongoose.model("orders", OrderSchema);
