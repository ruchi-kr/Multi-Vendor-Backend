const express = require("express")
const router = express.Router();
const { ValidateRequest, UserAuth } = require("../Middleware");
const { UserAuthSchema, CommonSchema, UserSchema, AdminSchema } = require("../Validation");
const { CatchAsync } = require("../Utils");
const { UserAuthController, UserController } = require("../controller");

// router.get("/get-profile", UserAuth, CatchAsync(UserAuthController.GetProfile));
// router.get("/get-members", UserAuth, CatchAsync(UserController.GetMembers));
// router.get("/get-claims", ValidateRequest(UserSchema.ClaimPagination, "query"), UserAuth, CatchAsync(UserController.GetClaims))
// router.get("/get-claim-details", ValidateRequest(CommonSchema.ParamsId, "query"), UserAuth, CatchAsync(UserController.GetClaim))
// router.get("/get-subscribed-plan", UserAuth, CatchAsync(UserController.GetSubscribedPlan))

module.exports = router