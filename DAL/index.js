const AdminDal = require("./admin/admin.dal");
const UserDal = require("./user/user.dal");
const VendorDal = require("./vendor/vendor.dal");
const RestaurantDal = require("./restaurant/restaurant.dal");
const DeliveryAgentDal = require("./deliveryAgent/deliveryAgent.dal");
const RiderDal = require("./rider/rider.dal");
const AuthDal = require("./auth.dal");

const UserDetailsDal = require("./user/userDetails.dal");
const RiderDetailsDal = require("./rider/riderDetails.dal");
const VendorDetailsDal = require("./vendor/vendorDetails.dal");
const DeliveryAgentDetailsDal = require("./deliveryAgent/deliveryAgentDetails.dal");
const RestaurantDetailsDal = require("./restaurant/restaurantDetails.dal");
const AdminDetailsDal = require("./admin/adminDetails.dal");
const BankDetailsDal = require("./bank.dal");

const UserAddressDal = require("./user/userAddress.dal");

module.exports = {
    AdminDal,
    UserDal,
    VendorDal,
    RestaurantDal,
    DeliveryAgentDal,
    RiderDal,
    AuthDal,

    UserDetailsDal,
    RiderDetailsDal,
    VendorDetailsDal,
    DeliveryAgentDetailsDal,
    RestaurantDetailsDal,
    AdminDetailsDal,
    BankDetailsDal,

    UserAddressDal,
};
