const mongoose = require("mongoose");

const adminDetailsSchema = new mongoose.Schema({
  permissions: [String],
  department: String,
});
module.exports = mongoose.model("admin_details", adminDetailsSchema,"admin_details");
