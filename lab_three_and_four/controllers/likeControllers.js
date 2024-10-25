const Post = require("../models/Post.js");
const User = require("../models/User.js");
const Like = require("../models/Like.js");

const createLike = async (req, res) => {
  try {
    const { post_id, user_id } = req.body;

    // Validate required fields
    if (!post_id || !user_id) {
      return res
        .status(400)
        .json({ message: "post_id and user_id are required" });
    }

    // Check if the post exists
    const post = await Post.findOne({ where: { post_id, is_deleted: false } });
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Check if the user exists
    const user = await User.findOne({ where: { user_id, is_deleted: false } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create the like since both the post and user exist
    const like = await Like.create(req.body);
    res.status(201).json(like);
  } catch (error) {
    res.status(400).json({ message: error.message || "An error occurred" });
  }
};

const getLikes = async (req, res) => {
  try {
    const likes = await Like.findAll({ where: { is_deleted: false } });
    res.status(200).json(likes);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getLikeById = async (req, res) => {
  try {
    const like = await Like.findOne({
      where: { like_id: req.params.id, is_deleted: false },
    });
    if (!like) return res.status(404).json({ message: "Like not found" });
    res.status(200).json(like);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteLike = async (req, res) => {
  try {
    const [updated] = await Like.update(
      { is_deleted: true },
      { where: { like_id: req.params.id } }
    );
    if (!updated) return res.status(404).json({ message: "Like not found" });

    res.status(200).json({ message: "Like soft deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { createLike, getLikes, getLikeById, deleteLike };
