const express = require("express")
const router = express.Router();
const { ValidateRequest, RiderAuth } = require("../Middleware");
const {AuthSchema, CommonSchema, RiderSchema } = require("../Validation");
const { CatchAsync } = require("../Utils");
const { RiderController, PublicController } = require("../controller");
const multer = require("multer")
const upload = multer();

router.post("/upload-files", RiderAuth, upload.array('files', 2), ValidateRequest(CommonSchema.UploadFile), CatchAsync(PublicController.UploadFile))

router.post("/add-rider-details", RiderAuth, ValidateRequest(RiderSchema.AddRiderDetails, "body"), CatchAsync(RiderController.AddRiderDetails));


module.exports = router