const express = require("express")
const router = express.Router();
const { ValidateRequest, UserAuth, VendorAuth } = require("../Middleware");
const { UserAuthSchema, CommonSchema, UserSchema, AdminSchema } = require("../Validation");
const { CatchAsync } = require("../Utils");
const { UserAuthController, UserController, VendorController, PublicController } = require("../controller");
const multer = require("multer")
const upload = multer();

router.post("/upload-files", VendorAuth, upload.array('files', 2), ValidateRequest(CommonSchema.UploadFile), CatchAsync(PublicController.UploadFile))

// router.get("/get-profile", UserAuth, CatchAsync(UserAuthController.GetProfile));
// router.get("/get-members", UserAuth, CatchAsync(UserController.GetMembers));
// router.get("/get-claims", ValidateRequest(UserSchema.ClaimPagination, "query"), UserAuth, CatchAsync(UserController.GetClaims))
// router.get("/get-claim-details", ValidateRequest(CommonSchema.ParamsId, "query"), UserAuth, CatchAsync(UserController.GetClaim))
// router.get("/get-subscribed-plan", UserAuth, CatchAsync(UserController.GetSubscribedPlan))

module.exports = router