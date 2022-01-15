const postCtrl = require("../Controllers/postController");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");
const router = require("express").Router();
router
  .post("/create", auth, postCtrl.CreatePosts)
  .get("/allpost", postCtrl.getPosts);

router
  .delete("/delete/:id", auth, postCtrl.DeletePost)
  .get("/getId/:id", postCtrl.getPostsId)
  .put("/edit/:id", auth, postCtrl.UpdatePost);
module.exports = router;
