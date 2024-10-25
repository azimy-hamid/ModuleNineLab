const Comment = require("../models/Comment.js");

// Create a comment on a post
const createComment = async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.status(201).send(comment);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get comments for a post
const getCommentsForPost = async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    res.status(200).send(comments);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a comment
const updateComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!comment) return res.status(404).send("Comment not found");
    res.status(200).send(comment);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a comment
const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) return res.status(404).send("Comment not found");
    res.status(200).send({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createComment,
  getCommentsForPost,
  updateComment,
  deleteComment,
};
