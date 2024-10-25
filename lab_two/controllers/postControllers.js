const Post = require("../models/Post.js");

// Create a new post
const createPost = async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).send(post);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a single post by ID
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).send("Post not found");
    res.status(200).send(post);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a post
const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!post) return res.status(404).send("Post not found");
    res.status(200).send(post);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a post
const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).send("Post not found");
    res.status(200).send({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { createPost, getPosts, getPostById, updatePost, deletePost };
