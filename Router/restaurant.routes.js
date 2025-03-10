const express = require("express")
const router = express.Router();
const { ValidateRequest, RestaurantAuth } = require("../Middleware");
const {CommonSchema, UserSchema, AdminSchema, RestaurantSchema } = require("../Validation");
const { CatchAsync } = require("../Utils");
const { RestaurantController, PublicController, AuthController } = require("../controller");
const multer = require("multer")
const upload = multer();

router.post("/upload-files", RestaurantAuth, upload.array('files', 2), ValidateRequest(CommonSchema.UploadFile), CatchAsync(PublicController.UploadFile))
router.get("/get-profile", RestaurantAuth, CatchAsync(AuthController.GetProfile));

router.put("/availability", RestaurantAuth, ValidateRequest(RestaurantSchema.ChangeAvailabilty, "body"), CatchAsync(RestaurantController.ChangeAvailabilty))
router.put("/update-restaurant-details", RestaurantAuth, ValidateRequest(RestaurantSchema.UpdateRestaurantDetails, "body"), CatchAsync(RestaurantController.UpdateRestaurantDetails));


module.exports = router