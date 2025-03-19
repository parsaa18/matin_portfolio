const message = require("../models/message.model");

const getmessages = async (_req, res) => {
  try {
    const messageRes = await message.find({});
    res.status(200).json({ status: "success", messagesList: messageRes });
  } catch (error) {
    res.status(500).json({ status: "failure", error: error.message });
  }
};

const getmessageById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await message.findById(id);
    if (result) {
      res.status(200).json({ status: "success", message: result });
    } else {
      res.status(404).json({ status: "not found", result });
    }
  } catch (error) {
    res.status(500).json({ status: "failure", error: error.message });
  }
};

const addmessage = async (req, res) => {
  try {
    const messageRes = await message.create(req.body);
    res.status(200).json({ status: "success", message: messageRes });
  } catch (error) {
    res.status(500).json({ status: "failure", error: error.message });
  }
};

const deletemessage = async (req, res) => {
  try {
    const { id } = req.params;
    const messageRes = await message.findByIdAndDelete(id);
    if (!messageRes) {
      res
        .status(404)
        .json({ status: "message is not found", message: messageRes });
    } else {
      res.status(200).json({ status: "success", message: messageRes });
    }
  } catch (error) {
    res.status(500).json({ status: "failure", error: error.message });
  }
};

module.exports = {
  getmessages,
  getmessageById,
  addmessage,
  deletemessage,
};
