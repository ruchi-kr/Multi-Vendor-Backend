const AdminSchema = require("./admin/admin");
const CommonSchema = require("./common");
const AuthSchema = require("./auth");
const UserSchema = require("./user/user");
const RiderSchema = require("./rider/rider");
const VendorSchema = require("./vendor/vendor");
const DeliveryAgentSchema = require("./deliveryAgent/deliveryAgent");
const RestaurantSchema = require("./restaurant/restaurant");

module.exports = {
    CommonSchema,
    AuthSchema,
    AdminSchema,
    UserSchema,
    VendorSchema,
    RiderSchema,
    DeliveryAgentSchema,
    RestaurantSchema
};