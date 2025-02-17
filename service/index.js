const AdminService = require("./admin/admin.service");
const UserService = require("./user/user.service");
// const TokenServices = require("./token.service");
const PublicService = require("./public/public.service");
const AuthService = require("./auth/auth.service");
const RestaurantService = require("./restaurant/restaurant.service")
const RiderService = require("./rider/rider.service");
const VendorService = require("./vendor/vendor.service");
const DeliveryAgentService = require("./deliveryAgent/deliveryAgent.service");

module.exports = { 
    AdminService,
    UserService,
    RiderService,
    VendorService,
    DeliveryAgentService,
    RestaurantService,
    
    PublicService,
    AuthService,
};
