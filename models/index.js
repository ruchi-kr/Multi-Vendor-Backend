const user = require("./user.model");

const AdminDetails = require("./adminDetails.model");
const RestaurantDetails = require("./restaurantDetails.model");
const DeliveryAgentDetails = require("./deliveryAgentDetails.model");
const UserDetails = require("./userDetails.model");
const RiderDetails = require("./riderDetails.model");
const VendorDetails = require("./vendorDetails.model");

const BankDetails = require("./bankDetails.model");
const SystemSettings = require("./systemSettings.model");

const otp = require("./otps.model");
const cart = require("./cart.model");
const dish = require("./dish.model");
const order = require("./orders.model");
const ratingAndReview = require("./ratingAndReview.model");
const UserAddresses = require("./userAddress.model");
const offers = require("./offer.model");
const coupons = require("./coupon.model");

const FoodOrder = require("./foodOrder.model");
const RideOrder = require("./rideOrder.model");
const ServiceOrder = require("./serviceOrder.model");


module.exports = {
    user,
    AdminDetails,
    RestaurantDetails,
    DeliveryAgentDetails,
    UserDetails,
    RiderDetails,
    VendorDetails,

    BankDetails,
    SystemSettings,

    otp,
    cart,
    dish,
    order,
    ratingAndReview,
    UserAddresses,
    offers,
    coupons,

    FoodOrder,
    RideOrder,
    ServiceOrder
};
