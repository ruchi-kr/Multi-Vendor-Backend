const express = require("express")
const router = express.Router();
const { ValidateRequest, UserAuth } = require("../Middleware");
const { UserAuthSchema, CommonSchema, UserSchema, AdminSchema } = require("../Validation");
const { CatchAsync } = require("../Utils");
const { UserController, AuthController, PublicController } = require("../controller");
const multer = require("multer")
const upload = multer();

router.post("/upload-files", UserAuth, upload.array('files', 2), ValidateRequest(CommonSchema.UploadFile), CatchAsync(PublicController.UploadFile))

router.get("/get-profile", UserAuth, CatchAsync(AuthController.GetProfile));
router.put("/update-profile", UserAuth, ValidateRequest(UserSchema.UpdateProfile, "body"), CatchAsync(UserController.UpdateProfile));

router.get("/get-all-addresses", UserAuth, CatchAsync(UserController.GetAllAddresses));
router.get("/get-address/:id", UserAuth, ValidateRequest(CommonSchema.ParamsId, "params"), CatchAsync(UserController.GetUserAddress));
router.post("/add-address", UserAuth, ValidateRequest(UserSchema.AddAddress, "body"), CatchAsync(UserController.AddAddress));
router.put("/update-address", UserAuth, ValidateRequest(UserSchema.UpdateAddress, "body"), CatchAsync(UserController.UpdateAddress));
router.delete("/delete-address/:id", UserAuth, ValidateRequest(CommonSchema.ParamsId, "params"), CatchAsync(UserController.DeleteAddress));
router.delete("/delete-all-address", UserAuth, CatchAsync(UserController.DeleteAllAddress));

module.exports = router