const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    title: { type: String, required: [true, "title is required"] },
    message: { type: String, required: [true, "message is required"] },
    role: { type: String, required: [true, "role is required"] },
    image: { type: String, required: [true, "image is required"] },
  },
  { timestamps: true }
);

const comment = mongoose.model("comment", commentSchema);

module.exports = comment;
