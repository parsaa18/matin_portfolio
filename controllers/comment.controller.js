const comment = require("../models/comment.model");

const getcomments = async (_req, res) => {
  try {
    const commentRes = await comment.find({});

    res.status(200).json({ status: "success", commentsList: commentRes });
  } catch (error) {
    res.status(500).json({ status: "failure", error: error.message });
  }
};

const getcommentById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await comment.findById(id);

    if (result) {
      res.status(200).json({ status: "success", comment: result });
    } else {
      res.status(404).json({ status: "not found", result });
    }
  } catch (error) {
    res.status(500).json({ status: "failure", error: error.message });
  }
};

const addcomment = async (req, res) => {
  try {
    const commentRes = await comment.create(req.body);
    res.status(200).json({ status: "success", comment: commentRes });
  } catch (error) {
    res.status(500).json({ status: "failure", error: error.message });
  }
};

const updatecomment = async (req, res) => {
  try {
    const { id } = req.params;
    const commentRes = await comment.findByIdAndUpdate(id, req.body);
    if (!commentRes) {
      res
        .status(404)
        .json({ status: "comment is not found", comment: commentRes });
    } else {
      const updatedcomment = await comment.findById(id);
      res.status(200).json({ status: "success", comment: updatedcomment });
    }
  } catch (error) {
    res.status(500).json({ status: "failure", error: error.message });
  }
};

const deletecomment = async (req, res) => {
  try {
    const { id } = req.params;
    const commentRes = await comment.findByIdAndDelete(id);
    if (!commentRes) {
      res
        .status(404)
        .json({ status: "comment is not found", comment: commentRes });
    } else {
      res.status(200).json({ status: "success", comment: commentRes });
    }
  } catch (error) {
    res.status(500).json({ status: "failure", error: error.message });
  }
};

module.exports = {
  getcomments,
  getcommentById,
  addcomment,
  updatecomment,
  deletecomment,
};
