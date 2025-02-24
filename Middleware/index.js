const ValidateRequest = require("./validationRequest");
const AdminAuth =require("./adminAuth");
const UserAuth =require("./userAuth");
const VendorAuth =require("./vendorAuth");
const RiderAuth =require("./riderAuth");
const AgentAuth =require("./agentAuth");
const RestaurantAuth =require("./restaurantAuth");
const ValidatePrivilege = require("./validatePrivilege");

module.exports = {
    ValidateRequest,
    ValidatePrivilege,
    AdminAuth,
    UserAuth,
    VendorAuth,
    RiderAuth,
    AgentAuth,
    RestaurantAuth
}