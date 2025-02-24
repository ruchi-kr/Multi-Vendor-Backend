const express = require("express")
const router = express.Router();
const { CatchAsync } = require("../Utils");
const { PublicController } = require("../controller");
const { CommonSchema} = require("../Validation");
const { ValidateRequest } = require("../Middleware/index");
const multer = require("multer")
const upload = multer();

// router.post("/register-doctor", ValidateRequest(CommonSchema.AddDoctor,"body"), CatchAsync(PublicController.AddDoctor))

module.exports = router