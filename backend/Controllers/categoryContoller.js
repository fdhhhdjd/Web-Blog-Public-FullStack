const Category = require("../Model/CategoryModel");

const categoryCtrl = {
  createCategory: async (req, res) => {
    const newCat = new Category(req.body);
    try {
      const savedCat = await newCat.save();
      res.json({
        success: true,
        savedCat,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  GetAllCategory: async (req, res) => {
    try {
      const cats = await Category.find();
      res.json({
        success: true,
        cats,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
module.exports = categoryCtrl;
