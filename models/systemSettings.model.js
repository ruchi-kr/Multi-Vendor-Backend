const mongoose = require("mongoose");
const { CONSTANTS } = require("../Constant");

const SystemSettingsSchema = new mongoose.Schema({
    doc_size: {
        type: Number,
        default: 2048
    },
    file_type: {
        type: String,
        default: "jpeg,pdf"
    },
    payment_modes: {
        type: [{ type: Number }],
        enum: Object.values(CONSTANTS.PAYMENT_MODE),
        default: [0, 1, 2, 3]
    },
    delivery_charge: {
        type: Number,
        default: 0
    },
    min_order_amount: {
        type: Number,
        default: 0
    },
    gst: {
        type: Number,
        default: 0
    },
    convinience_fee: {
        type: Number,
        default: 0
    },

},
    { timestamps: true }
);

SystemSettingsSchema.pre('save', async function (next) {
    const SystemSettings = mongoose.model('system_settings', SystemSettingsSchema);
    const count = await SystemSettings.countDocuments();

    if (count > 0) {
        const error = new Error('Cannot create more than one settings document');
        next(error);
    } else {
        next();
    }
});

const SystemSettings = mongoose.model("system_settings", SystemSettingsSchema);

const initializeSettings = async () => {
    try {
        const count = await SystemSettings.countDocuments();
        if (count === 0) {
            await SystemSettings.create({});
            console.log('Initialized default settings');
        }
    } catch (error) {
        console.error('Error initializing settings:', error);
    }
};

initializeSettings();


module.exports = SystemSettings;
