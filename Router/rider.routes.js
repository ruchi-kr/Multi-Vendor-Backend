const express = require("express")
const router = express.Router();
const { ValidateRequest, RiderAuth } = require("../Middleware");
const { CommonSchema, RiderSchema } = require("../Validation");
const { CatchAsync } = require("../Utils");
const { RiderController, PublicController, AuthController } = require("../controller");
const multer = require("multer")
const upload = multer();

router.post("/upload-files", RiderAuth, upload.array('files', 2), ValidateRequest(CommonSchema.UploadFile), CatchAsync(PublicController.UploadFile))
router.put("/update-rider-details", RiderAuth, ValidateRequest(RiderSchema.UpdateRiderDetails, "body"), CatchAsync(RiderController.UpdateRiderDetails));
router.get("/get-profile", RiderAuth, CatchAsync(AuthController.GetProfile));
router.put("/availability", RiderAuth, ValidateRequest(RiderSchema.ChangeAvailabilty, "body"), CatchAsync(RiderController.ChangeAvailabilty))


module.exports = router