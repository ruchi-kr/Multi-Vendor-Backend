const AuthController = require("./auth/auth.controller");
const PublicController = require("./public/public.controller");
const UserController = require("./user/user.controller");
const AdminController = require("./admin/admin.controller");
const RestaurantController = require("./restaurant/restaurant.controller");
const RiderController = require("./rider/rider.controller");
const VendorController = require("./vendor/vendor.controller");
const DeliveryAgentController = require("./deliveryAgent/deliveryAgent.controller");


module.exports = { 
    AdminController,
    UserController,
    RestaurantController,
    RiderController,
    VendorController,
    DeliveryAgentController,

    PublicController,
    AuthController
 };
