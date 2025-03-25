const express = require("express");
const {
  getroles,
  getroleById,
  addrole,
  deleterole,
} = require("../controllers/role.controller");

const router = express.Router();

router.get("/", getroles);

router.get("/:id", getroleById);

router.post("/", addrole);

router.delete("/:id", deleterole);

module.exports = router;
