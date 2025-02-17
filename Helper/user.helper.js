const { CONSTANTS } = require("../Constant");
const {UserDetailsDal, RiderDetailsDal, VendorDetailsDal, DeliveryAgentDetailsDal, RestaurantDetailsDal, AdminDetailsDal } = require("../DAL");
const { ApiError} = require("../Utils");
const { StatusCodes } = require("http-status-codes");

const AdditionalData = {
    getAdditionalDetailModel: (role) => {
        switch (role) {
            case CONSTANTS.ROLE.ADMIN: return "admin_details";
            case CONSTANTS.ROLE.DELIVERY_AGENT: return "delivery_agent_details";
            case CONSTANTS.ROLE.RESTAURANT: return "restaurant_details";
            case CONSTANTS.ROLE.USER: return "user_details";
            case CONSTANTS.ROLE.RIDER: return "rider_details";
            case CONSTANTS.ROLE.VENDOR: return "vendor_details";
            default:
                throw new ApiError(CONSTANTS_MESSAGES.INVALID_ROLE, StatusCodes.BAD_REQUEST);
        }
    },

    createAdditionalDetails: async (role, userId) => {
        let additionalDetail;

        switch (role) {
            case CONSTANTS.ROLE.ADMIN:
                additionalDetail = await AdminDetailsDal.CreateAdminDetails({ user: userId });
                break;
            case CONSTANTS.ROLE.DELIVERY_AGENT:
                additionalDetail = await DeliveryAgentDetailsDal.CreateDeliveryAgentDetails({ user: userId });
                break;
            case CONSTANTS.ROLE.RESTAURANT:
                additionalDetail = await RestaurantDetailsDal.CreateRestaurantDetails({ user: userId });
                break;
            case CONSTANTS.ROLE.USER:
                additionalDetail = await UserDetailsDal.CreateUserDetails({ user: userId });
                break;
            case CONSTANTS.ROLE.RIDER:
                additionalDetail = await RiderDetailsDal.CreateRiderDetails({ user: userId });
                break;
            case CONSTANTS.ROLE.VENDOR:
                additionalDetail = await VendorDetailsDal.CreateVendorDetails({ user: userId });
                break;
            default:
                throw new ApiError(CONSTANTS_MESSAGES.INVALID_ROLE, StatusCodes.BAD_REQUEST);
        }

        return additionalDetail;
    },

}

module.exports = AdditionalData;
