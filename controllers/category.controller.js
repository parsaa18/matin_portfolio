const category = require("../models/category.model");

const getcategorys = async (_req, res) => {
  try {
    const categoryRes = await category.find({});
    res.status(200).json({ status: "success", categorysList: categoryRes });
  } catch (error) {
    res.status(500).json({ status: "failure", error: error.category });
  }
};

const getcategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await category.findById(id);
    if (result) {
      res.status(200).json({ status: "success", category: result });
    } else {
      res.status(404).json({ status: "not found", result });
    }
  } catch (error) {
    res.status(500).json({ status: "failure", error: error.category });
  }
};

const addcategory = async (req, res) => {
  try {
    const categoryRes = await category.create(req.body);
    res.status(200).json({ status: "success", category: categoryRes });
  } catch (error) {
    res.status(500).json({ status: "failure", error: error.category });
  }
};

const deletecategory = async (req, res) => {
  try {
    const { id } = req.params;
    const categoryRes = await category.findByIdAndDelete(id);
    if (!categoryRes) {
      res
        .status(404)
        .json({ status: "category is not found", category: categoryRes });
    } else {
      res.status(200).json({ status: "success", category: categoryRes });
    }
  } catch (error) {
    res.status(500).json({ status: "failure", error: error.category });
  }
};

module.exports = {
  getcategorys,
  getcategoryById,
  addcategory,
  deletecategory,
};
