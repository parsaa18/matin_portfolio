const express = require("express");
const {
  getmessages,
  getmessageById,
  addmessage,
  deletemessage,
} = require("../controllers/message.controller");

const router = express.Router();

router.get("/", getmessages);

router.get("/:id", getmessageById);

router.post("/", addmessage);

router.delete("/:id", deletemessage);

module.exports = router;
