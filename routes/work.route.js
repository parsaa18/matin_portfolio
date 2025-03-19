const express = require("express");
const {
  getWorks,
  getWorkByTitle,
  addWork,
  updateWork,
  deleteWork,
} = require("../controllers/works.controller");

const router = express.Router();

router.get("/", getWorks);

router.get("/:title", getWorkByTitle);

router.post("/", addWork);

router.put("/:id", updateWork);

router.delete("/:id", deleteWork);

module.exports = router;
