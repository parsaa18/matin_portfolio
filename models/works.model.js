const mongoose = require("mongoose");

const workSchema = mongoose.Schema(
  {
    title: { type: String, required: [true, "title is required"] },
    description: { type: String, required: [true, "description is required"] },
    thumbnail: { type: String, required: [true, "thumbnail is required"] },
    category: { type: String, required: [true, "category is required"] },
    orderedBy: { type: String, required: [true, "orderedBy is required"] },
    media: { type: [String], required: false },
    date: { type: Date, required: true },
    role: { type: String, required: [true, "role is required"] },
    link: { type: String, required: [true, "link is required"] },
    timeframe: { type: String, required: [true, "timeframe is required"] },
  },
  { timestamps: true }
);

const work = mongoose.model("work", workSchema);

module.exports = work;
