const express = require("express");
const {
  getcategorys,
  getcategoryById,
  addcategory,
  deletecategory,
} = require("../controllers/category.controller");

const router = express.Router();

router.get("/", getcategorys);

router.get("/:id", getcategoryById);

router.post("/", addcategory);

router.delete("/:id", deletecategory);

module.exports = router;
