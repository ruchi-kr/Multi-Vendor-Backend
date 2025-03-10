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
router.put("/availability", AgentAuth, ValidateRequest(DeliveryAgentSchema.ChangeAvailabilty, "body"), CatchAsync(DeliveryAgentController.ChangeAvailabilty))
router.put("/update-agent-details", AgentAuth, ValidateRequest(DeliveryAgentSchema.UpdateDeliveryAgentDetails, "body"), CatchAsync(DeliveryAgentController.UpdateDeliveryAgentDetails));


module.exports = router;