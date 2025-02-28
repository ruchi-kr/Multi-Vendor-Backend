const express = require("express")
const router = express.Router();
const { ValidateRequest, AgentAuth } = require("../Middleware");
const { CommonSchema,  DeliveryAgentSchema } = require("../Validation");
const { CatchAsync } = require("../Utils");
const {  DeliveryAgentController, PublicController, AuthController } = require("../controller");
const multer = require("multer")
const upload = multer();

router.post("/upload-files", AgentAuth, upload.array('files', 2), ValidateRequest(CommonSchema.UploadFile), CatchAsync(PublicController.UploadFile))
router.get("/get-profile", AgentAuth, CatchAsync(AuthController.GetProfile));


// router.post("/login", ValidateRequest(AuthSchema.Login, "body"), CatchAsync(HRAuthController.Login));
// router.post("/logout", HRAuth, CatchAsync(HRAuthController.Logout));

// router.post("/corpoEmp", HRAuth, ValidateRequest(HRSchema.AddCorpUser, "body"), CatchAsync(HRController.AddCorporateEmp));
// router.post("/corpoEmp/bulk", HRAuth, ValidateRequest(HRSchema.AddBulkCorpUser, "body"), CatchAsync(HRController.AddBulkCorporateEmp));
// router.get("/corpoEmp", HRAuth,  ValidateRequest(CommonSchema.Pagination, "query"),CatchAsync(HRController.GetAllCorporateEmp));
// router.patch("/corpoEmp/:id", HRAuth,  ValidateRequest(CommonSchema.ParamsId, "params") ,ValidateRequest(HRSchema.EditCorpUser, "body") , CatchAsync(HRController.EditCorporateEmp));
// router.patch("/corpoEmp/password/:id", HRAuth,  ValidateRequest(CommonSchema.ParamsId, "params"),ValidateRequest(HRSchema.EditCorpUserPassword, "body") , CatchAsync(HRController.ResetCorporateEmpPass));
// router.get("/corpoEmp/failedRecordsInserts/:id", HRAuth,  ValidateRequest(CommonSchema.Pagination, "query"),CatchAsync(HRController.GetAllFailedInsertsCorporateEmp));
// router.delete("/corpoEmp/deleteFailedRecordsInserts/",HRAuth, ValidateRequest(CommonSchema.Pagination, "query"),CatchAsync(HRController.DeleteAllFailedInsertsCorporateEmp));


module.exports = router;