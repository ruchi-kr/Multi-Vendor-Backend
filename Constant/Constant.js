const CONSTANTS = {
    REGEX: {
        EMAIL: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        NUMBER: /^\d+$/,
        PHONE: /^[0-9]{10,13}$/,
        PHONE_INDIAN: /^\+91[0-9]{10}$/,
        COUNTRY_CODE: /^(\+?\d{1,3}|\d{1,4})$/,
        FILE_TYPE: /^[A-Za-z]+(,[A-Za-z]+)*$/,
        NAME: /^[a-zA-Z0-9 ._/&@-]+$/,
        PERSON_NAME: /^[a-zA-Z .]+$/,
        PINCODE: /^[1-9][0-9]{5}$/,
        AADHAR: /^\d{4}\s?\d{4}\s?\d{4}$/,
        PAN: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
        DRIVING_LICENSE: /^[A-Z]{2}[0-9]{2}[0-9]{4,10}$/,
        IFSC: /^[A-Z]{4}0[A-Z0-9]{6}$/,
        BANK_ACCOUNT: /^\d{9,18}$/
    },

    PASSWORD_VALIDATION_REGEX: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#_])[A-Za-z\\d@$!%*?&#_]{8,}$"),

    KEY_TYPE: {
        EMAIL: 0,
        PHONE: 1
    },

    ROLE: {
        ADMIN: 0,
        USER: 1,
        RIDER: 2,
        VENDOR: 3,
        DELIVERY_AGENT: 4,
        RESTAURANT: 5
    },

    FOOD_ORDER_STATUS: {
        PLACED: 0,
        ACCEPTED: 1,
        PROCESSING: 2,
        DISPATCHED: 3,
        DELIVERED: 4,
        CANCELLED: 5,
        REJECTED: 6,
        RETURNED: 7
    },

    RIDE_STATUS: {
        BOOKED: 0,
        ACCEPTED: 1,
        ONWAY: 2,
        ARRIVED: 3,
        CANCELLED: 5,
        REJECTED: 6,
    },

    RIDE_TYPE: {
        NORMAL: 0,
        SCHEDULED: 1
    },

    ORDER_TYPE: {
        DELIVERY: 0,
        EATOUT: 1
    },

    REASONS_FOR_CANCELATION: [

    ],

    GENDER: {
        MALE: 0,
        FEMALE: 1,
        OTHER: 2
    },

    FOOD: {
        ORDER_STATUS: {
            PLACED: 0,
            ACCEPTED: 1,
            PROCESSING: 2,
            DISPATCHED: 3,
            DELIVERED: 4,
            CANCELLED: 5,
            REJECTED: 6,
            RETURNED: 7
        },
        DELIVERY_STATUS: {
            PENDING: 0,
            OUT_FOR_DELIVERY: 1,
            DELIVERED: 2,
            CANCELLED: 3
        },
        ORDER_TYPE: {
            DELIVERY: 0,
            EATOUT: 1
        }
    },

    RIDE: {
        ORDER_STATUS: {
            PLACED: 0,
            ACCEPTED: 1,
            ONWAY: 2,
            ARRIVED: 3,
            CANCELLED: 5,
            REJECTED: 6,
        },

        ORDER_TYPE: {
            NORMAL: 0,
            SCHEDULED: 1
        },
    },

    SERVICE: {
        ORDER_STATUS: {
            PLACED: 0,
            ACCEPTED: 1,
            PROCESSING: 2,
            DISPATCHED: 3,
            DELIVERED: 4,
            CANCELLED: 5,
            REJECTED: 6,
            RETURNED: 7
        },

        SERVICE_STATUS: {
            PENDING: 0,
            OUT_FOR_DELIVERY: 1,
            DELIVERED: 2,
            CANCELLED: 3
        },

        SERVICE_TYPE: {
            IT_SERVICE: 0,
            HOME_SERVICE: 1,
            OTHER: 2
        }

    },



    PAYMENT_STATUS: {
        PENDING: 0,
        COMPLETED: 1,
        FAILED: 2
    },

    PAYMENT_MODE: {
        CASH: 0,
        CARD: 1,
        UPI: 2,
        WALLET: 3,
        ONLINE: 4
    },

    ORDER_TYPE: {
        DELIVERY: 0,
        EATOUT: 1
    },

    DISH_CATEGORY: {
        VEG: 0,
        NONVEG: 1,
    },

    DISH_TYPE: {
        APPETIZER: 0,
        MAIN_COURSE: 1,
        DESSERT: 2,
        BEVERAGE: 3,
        STARTERS: 4,
        SALADS: 5,
        SIDES: 6,
        SOUPS: 7,
        BREADS: 8,
        BAKERY: 9,
        OTHER: 10
    },

    LOCATION_TYPE: {
        POINT: 0,
        POLYGON: 1
    },

    AVAILABILITY_STATUS: {
        AVAILABLE: 0,
        UNAVAILABLE: 1
    },

    USER_ADDRESS_TYPE: {
        HOME: 0,
        OFFICE: 1,
        OTHER: 2
    },

    DISCOUNT_TYPE: {
        PERCENTAGE: 0,
        FLAT: 1
    },

    EARNED_FROM: {
        ORDER: 0,
        PROMOTION: 1,
        REFERRAL: 2,
        OTHER: 3
    },


}

module.exports = CONSTANTS