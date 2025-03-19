const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "name is required"] },
    email: { type: String, required: [true, "email is required"] },
    message: { type: String, required: [true, "message is required"] },
  },
  { timestamps: true }
);

const message = mongoose.model("message", messageSchema);

module.exports = message;
