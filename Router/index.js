const express = require("express")
const router = express.Router();
const { VERSION } = require("../Config")
const AdminRouter = require("./admin.routes")
const UserRouter = require("./user.routes")
const PublicRouter = require("./public.routes")
const RestaurantRouter = require("./restaurant.routes")
const RiderRouter = require("./rider.routes");
const VendorRouter = require("./vendor.routes");
const DeliveryAgentRouter = require("./deliveryAgent.routes");
const AuthRouter = require("./auth.routes")

const defaultRoutes = [
    {
        path: `/${VERSION}/admin`,
        route: AdminRouter
    },
    {
        path: `/${VERSION}/user`,
        route: UserRouter
    },
    {
        path: `/${VERSION}/public`,
        route: PublicRouter
    },
    {
        path: `/${VERSION}/auth`,
        route: AuthRouter
    },
    {
        path: `/${VERSION}/restaurant`,
        route: RestaurantRouter
    },
    {
        path: `/${VERSION}/rider`,
        route: RiderRouter
    },
    {
        path: `/${VERSION}/vendor`,
        route: VendorRouter
    },
    {
        path: `/${VERSION}/delivery-agent`,
        route: DeliveryAgentRouter
    }
];

defaultRoutes.forEach((route)=>{
    router.use(route.path, route.route)
})

module.exports = router