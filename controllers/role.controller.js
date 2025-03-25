const role = require("../models/role.model");

const getroles = async (_req, res) => {
  try {
    const roleRes = await role.find({});
    res.status(200).json({ status: "success", rolesList: roleRes });
  } catch (error) {
    res.status(500).json({ status: "failure", error: error.role });
  }
};

const getroleById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await role.findById(id);
    if (result) {
      res.status(200).json({ status: "success", role: result });
    } else {
      res.status(404).json({ status: "not found", result });
    }
  } catch (error) {
    res.status(500).json({ status: "failure", error: error.role });
  }
};

const addrole = async (req, res) => {
  try {
    const roleRes = await role.create(req.body);
    res.status(200).json({ status: "success", role: roleRes });
  } catch (error) {
    res.status(500).json({ status: "failure", error: error.role });
  }
};

const deleterole = async (req, res) => {
  try {
    const { id } = req.params;
    const roleRes = await role.findByIdAndDelete(id);
    if (!roleRes) {
      res.status(404).json({ status: "role is not found", role: roleRes });
    } else {
      res.status(200).json({ status: "success", role: roleRes });
    }
  } catch (error) {
    res.status(500).json({ status: "failure", error: error.role });
  }
};

module.exports = {
  getroles,
  getroleById,
  addrole,
  deleterole,
};
