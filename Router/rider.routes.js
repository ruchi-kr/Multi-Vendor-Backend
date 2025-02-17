const express = require("express")
const router = express.Router();
const { ValidateRequest, Auth } = require("../Middleware");
const {AuthSchema, CommonSchema, RiderSchema } = require("../Validation");
const { CatchAsync } = require("../Utils");
const { RiderController } = require("../controller");

router.post("/add-rider-details", Auth, ValidateRequest(RiderSchema.AddRiderDetails, "body"), CatchAsync(RiderController.AddRiderDetails));


module.exports = router