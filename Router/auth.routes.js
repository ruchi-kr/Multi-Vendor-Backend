const express = require("express")
const router = express.Router();
const { ValidateRequest, Auth } = require("../Middleware");
const { AuthSchema } = require("../Validation");
const { CatchAsync } = require("../Utils");
const { AuthController } = require("../controller");

router.post("/send-otp", ValidateRequest(AuthSchema.SendOtp, "body"), CatchAsync(AuthController.SendOtp));
router.post("/sign-in-with-otp", ValidateRequest(AuthSchema.SignInWithOtp, "body"), CatchAsync(AuthController.SignInWithOtp));
router.post("/sign-up", ValidateRequest(AuthSchema.SignUp, "body"), CatchAsync(AuthController.SignUp));
router.post("/sign-in", ValidateRequest(AuthSchema.SignIn, "body"), CatchAsync(AuthController.SignIn));

module.exports = router

