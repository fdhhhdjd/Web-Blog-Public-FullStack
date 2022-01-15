const categoriesCtrl = require("../Controllers/categoryContoller");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");
const router = require("express").Router();
router
  .post("/create", categoriesCtrl.createCategory)
  .get("/allcategory", categoriesCtrl.GetAllCategory);
module.exports = router;
