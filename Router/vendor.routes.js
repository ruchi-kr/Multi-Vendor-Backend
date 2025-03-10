const express = require("express")
const router = express.Router();
const { ValidateRequest, VendorAuth } = require("../Middleware");
const { CommonSchema, VendorSchema } = require("../Validation");
const { CatchAsync } = require("../Utils");
const { VendorController, PublicController, AuthController } = require("../controller");
const multer = require("multer")
const upload = multer();

router.post("/upload-files", VendorAuth, upload.array('files', 2), ValidateRequest(CommonSchema.UploadFile), CatchAsync(PublicController.UploadFile))
router.put("/update-vendor-details", VendorAuth, ValidateRequest(VendorSchema.UpdateVendorDetails, "body"), CatchAsync(VendorController.UpdateVendorDetails));
router.put("/availability", VendorAuth, ValidateRequest(VendorSchema.ChangeAvailabilty, "body"), CatchAsync(VendorController.ChangeAvailabilty))
router.get("/get-profile", VendorAuth, CatchAsync(AuthController.GetProfile));

module.exports = router