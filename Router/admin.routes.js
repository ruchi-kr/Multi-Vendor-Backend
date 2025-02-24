const express = require("express");
const router = express.Router();
const { ValidateRequest, AdminAuth, ValidatePrivilege } = require("../Middleware/index");
const { AuthSchema, CommonSchema, AdminSchema, } = require("../Validation");
const { CatchAsync } = require("../Utils");
const { AuthController, AdminController, PublicController} = require("../controller");
const { CONSTANTS } = require("../Constant");
const multer = require("multer")
const upload = multer();

router.post("/upload-files", AdminAuth, upload.array('files', 2), ValidateRequest(CommonSchema.UploadFile), CatchAsync(PublicController.UploadFile))


// router.post("/upload-file", AdminAuth, upload.array('files', 5), CatchAsync(AdminController.UploadFile))

// router.post("/signup", ValidateRequest(AdminAuthSchema.Signup, "body"), CatchAsync(AdminAuthController.SignUp));
// router.post("/login", ValidateRequest(AdminAuthSchema.Signin, "body"), CatchAsync(AdminAuthController.Login));
// router.post("/logout", AdminAuth, CatchAsync(AdminAuthController.Logout));
// router.get("/get-profile", AdminAuth, CatchAsync(AdminController.GetProfile));

// router.get("/settings", CatchAsync(SysSettingsController.GetAll));
// router.patch("/settings/:id", AdminAuth, ValidatePrivilege(CONSTANTS.PRIVILEGE.PROGRAMME.ADMIN.SYSTEM.id,"PATCH"), ValidateRequest(CommonSchema.ParamsId, "params") ,ValidateRequest(SysSettingsSchema.Edit, "body") , CatchAsync(SysSettingsController.Edit));

// router.post("/coupon", AdminAuth, ValidatePrivilege(CONSTANTS.PRIVILEGE.PROGRAMME.ADMIN.COUPONS.id,"POST"), ValidateRequest(CouponSchema.Add,"body"), CatchAsync(CouponController.Add));
// router.get("/coupon", ValidateRequest(CommonSchema.Pagination, "query"),CatchAsync(CouponController.GetAll));
// router.patch("/coupon/:id", AdminAuth, ValidatePrivilege(CONSTANTS.PRIVILEGE.PROGRAMME.ADMIN.COUPONS.id,"PATCH"), ValidateRequest(CommonSchema.ParamsId, "params") ,ValidateRequest(CouponSchema.Edit, "body") , CatchAsync(CouponController.Edit));
// router.delete("/coupon/:id", AdminAuth, ValidatePrivilege(CONSTANTS.PRIVILEGE.PROGRAMME.ADMIN.COUPONS.id,"DELETE"), ValidateRequest(CommonSchema.ParamsId, "params"), CatchAsync(CouponController.Delete));

// router.get("/adminUsers/details", AdminAuth,  CatchAsync(AdminController.GetAllAdminUsers));

// router.get("/refered-users", AdminAuth,  ValidateRequest(CommonSchema.Pagination, "query"), CatchAsync(AdminController.GetAllReferUsers));
// router.patch("/refered-users/:id", AdminAuth,ValidateRequest(CommonSchema.ParamsId, "params"),  ValidateRequest(AdminSchema.EditReferedUsers, "body"), CatchAsync(AdminController.EditReferedUsers));
// router.delete("/refered-users/:id", AdminAuth,ValidateRequest(CommonSchema.ParamsId, "params"), CatchAsync(AdminController.DeleteReferedUsers));

// router.get("/notifications", ValidateRequest(CommonSchema.Pagination, "query"), AdminAuth, CatchAsync(AdminController.GetNotifications));
// router.delete("/notification/:id", ValidateRequest(CommonSchema.ParamsId, "params"), AdminAuth, CatchAsync(AdminController.DeleteNotification));


module.exports = router;
