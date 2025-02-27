const mongoose = require("mongoose");
const {CONSTANTS} = require("../Constant");

const deliveryAgentDetailsSchema = new mongoose.Schema({
   basic_details: {
     vendor_name: String,
     email: String,
     dob: Date,
     gender: {
       type: String,
       enum: Object.values(CONSTANTS.GENDER),
     },
     emergency_contact_number: String,
     blood_group: String,
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
   },
 
   assignedOrders: [
     {
       type: mongoose.Schema.Types.ObjectId,
       ref: "service_orders",
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
     },
     coordinates: {
       type: [Number],
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
 
   aadhar_details: {
     aadhar_number: {
       type: Number,
       unique: true,
       sparse: true,
     },
     aadhar_doc: Array,
   },
 
   pan_details: {
     panNumber: {
       type: String,
       unique: true,
       sparse: true,
     },
     pan_doc: String,
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
  "vendor_details",
  deliveryAgentDetailsSchema,
  "vendor_details"
);
