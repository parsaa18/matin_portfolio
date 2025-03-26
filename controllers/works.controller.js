const work = require("../models/works.model");

const getWorks = async (_req, res) => {
  try {
    const workRes = await work
      .find({})
      .populate("category", "category")
      .populate("role", "role");
    res.status(200).json({ status: "success", worksList: workRes });
  } catch (error) {
    res.status(500).json({ status: "failure", error: error.message });
  }
};

const getWorkByTitle = async (req, res) => {
  try {
    const { title } = req.params;
    const result = await work
      .find({ title })
      .populate("category", "category")
      .populate("role", "role");
    if (result.length) {
      res.status(200).json({ status: "success", work: result });
    } else {
      res.status(404).json({ status: "not found", result });
    }
  } catch (error) {
    res.status(500).json({ status: "failure", error: error.message });
  }
};

const addWork = async (req, res) => {
  try {
    const workRes = await work.create(req.body);
    res.status(200).json({ status: "success", work: workRes });
  } catch (error) {
    res.status(500).json({ status: "failure", error: error.message });
  }
};

const updateWork = async (req, res) => {
  try {
    const { id } = req.params;
    const workRes = await work.findByIdAndUpdate(id, req.body);
    if (!workRes) {
      res.status(404).json({ status: "work is not found", work: workRes });
    } else {
      const updatedWork = await work.findById(id);
      res.status(200).json({ status: "success", work: updatedWork });
    }
  } catch (error) {
    res.status(500).json({ status: "failure", error: error.message });
  }
};

const deleteWork = async (req, res) => {
  try {
    const { id } = req.params;
    const workRes = await work.findByIdAndDelete(id);
    if (!workRes) {
      res.status(404).json({ status: "work is not found", work: workRes });
    } else {
      res.status(200).json({ status: "success", work: workRes });
    }
  } catch (error) {
    res.status(500).json({ status: "failure", error: error.message });
  }
};

module.exports = { getWorks, getWorkByTitle, addWork, updateWork, deleteWork };
