const Post = require("../models/Post.js");
const User = require("../models/User.js");

const createPost = async (req, res) => {
  try {
    const { title, description, user_id_fk } = req.body; // Changed here
    if (!title || !description || !user_id_fk) {
      // Changed here
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user exists and is not deleted
    const user = await User.findOne({
      where: { user_id: user_id_fk, is_deleted: false },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found or deleted" });
    }

    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({ where: { is_deleted: false } });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getPostById = async (req, res) => {
  try {
    const post = await Post.findOne({
      where: { post_id: req.params.id, is_deleted: false },
    });
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updatePost = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description are required" });
    }

    const [updated] = await Post.update(
      { title, description },
      {
        where: { post_id: req.params.id, is_deleted: false },
      }
    );
    if (!updated) return res.status(404).json({ message: "Post not found" });

    const post = await Post.findOne({
      where: { post_id: req.params.id, is_deleted: false },
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json(error);
  }
};

const deletePost = async (req, res) => {
  try {
    const [updated] = await Post.update(
      { is_deleted: true },
      { where: { post_id: req.params.id } }
    );
    if (!updated) return res.status(404).json({ message: "Post not found" });

    res.status(200).json({ message: "Post soft deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { createPost, getPosts, getPostById, updatePost, deletePost };
