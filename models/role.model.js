const mongoose = require("mongoose");

const roleSchema = mongoose.Schema({
  role: { type: String, required: [true, "role is required"] },
});

const role = mongoose.model("role", roleSchema);

module.exports = role;
