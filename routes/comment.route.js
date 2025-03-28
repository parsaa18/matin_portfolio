const express = require("express");
const {
  getcomments,
  getcommentById,
  addcomment,
  updatecomment,
  deletecomment,
} = require("../controllers/comment.controller");

const router = express.Router();

router.get("/", getcomments);

router.get("/:id", getcommentById);

router.post("/", addcomment);

router.put("/:id", updatecomment);

router.delete("/:id", deletecomment);

module.exports = router;
