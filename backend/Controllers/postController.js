const Posts = require("../Model/PostModel");

const postCtrl = {
  getPosts: async (req, res) => {
    const author = req.query.user;
    const catName = req.query.cat;
    try {
      let posts;
      if (author) {
        posts = await Posts.find({ author });
      } else if (catName) {
        posts = await Posts.find({
          categories: {
            $in: [catName],
          },
        });
      } else {
        posts = await Posts.find();
      }
      res.json({ success: true, posts: posts });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getPostsId: async (req, res) => {
    try {
      const allPosts = await Posts.findById(req.params.id);
      res.json({
        success: true,
        allPosts,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  CreatePosts: async (req, res) => {
    try {
      const { title, desc, status, photo, author, categories } = req.body;
      if (!photo)
        return res.json({
          success: false,
          msg: "Please select a Photo !",
        });

      const titles = await Posts.findOne({ title });
      if (titles)
        return res.status(400).json({ msg: "This title already exists !" });
      const newPost = new Posts({
        title,
        desc,
        status,
        photo,
        author,
        categories,
      });

      const savedPost = await newPost.save();
      res.json({
        success: true,
        savePost: savedPost,
      });
    } catch (err) {
      return res.json({ msg: err.message });
    }
  },
  DeletePost: async (req, res) => {
    try {
      const post = await Posts.findById(req.params.id);

      await post.delete();
      res.json({
        success: true,
        msg: "Post has been deleted...",
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  UpdatePost: async (req, res) => {
    try {
      const { title, desc, status, photo, author, categories } = req.body;
      if (!photo)
        return res.status(400).json({
          success: false,
          msg: "No image upload",
        });
      const post = await Posts.findById(req.params.id);

      const updatedPost = await Posts.findByIdAndUpdate(
        { _id: req.params.id },
        {
          title,
          desc,
          status,
          photo,
          author,
          categories,
        },
        { new: true }
      );
      res.status(200).json(updatedPost);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
module.exports = postCtrl;
// try {
//   const { title, desc, status, photo, author, categories } = req.body;
//   if (!photo)
//     return res.status(400).json({
//       success: false,
//       msg: "No image upload",
//     });
//   await Posts.findOneAndUpdate(
//     { _id: req.params.id },
//     {
//       title,
//       desc,
//       status,
//       photo,
//       author,
//       categories,
//     },
//     { new: true }
//   );
//   res.json({
//     success: true,
//     msg: "Update Post Successfully !",
//   });
// } catch {
//   return res.status(500).json({ msg: err.message });
// }
