const Comment = require("../models/Comment.js");
const User = require("../models/User.js");
const Post = require("../models/Post.js");

const createComment = async (req, res) => {
  try {
    const { post_id, user_id, content } = req.body;

    // Validate required fields
    if (!post_id || !user_id || !content) {
      return res
        .status(400)
        .json({ message: "post_id, user_id, and content are required" });
    }

    // Check if user exists and is not deleted
    const user = await User.findOne({
      where: { user_id: user_id, is_deleted: false },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found or deleted" });
    }

    // Check if post exists and is not deleted
    const post = await Post.findOne({
      where: { post_id: post_id, is_deleted: false },
    });
    if (!post) {
      return res.status(404).json({ message: "Post not found or deleted" });
    }

    const comment = await Comment.create(req.body);
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getComments = async (req, res) => {
  try {
    const comments = await Comment.findAll({ where: { is_deleted: false } });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findOne({
      where: { comment_id: req.params.id, is_deleted: false },
    });
    if (!comment) return res.status(404).json({ message: "Comment not found" });
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateComment = async (req, res) => {
  try {
    const { content } = req.body;

    // Validate that content is provided
    if (!content) {
      return res.status(400).json({ message: "Content is required" });
    }

    // Update only the content field
    const [updatedCount] = await Comment.update(
      { content },
      { where: { comment_id: req.params.id, is_deleted: false } }
    );

    // Check if any rows were updated
    if (updatedCount === 0) {
      return res.status(404).json({ message: "Comment not found" });
    }

    // Retrieve the updated comment
    const updatedComment = await Comment.findOne({
      where: { comment_id: req.params.id, is_deleted: false },
    });

    // Check if the comment exists after the update
    if (!updatedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    // Return the updated comment
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(400).json({ message: error.message || "An error occurred" });
  }
};

const deleteComment = async (req, res) => {
  try {
    const [updated] = await Comment.update(
      { is_deleted: true },
      { where: { comment_id: req.params.id } }
    );
    if (!updated) return res.status(404).json({ message: "Comment not found" });

    res.status(200).json({ message: "Comment soft deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createComment,
  getComments,
  getCommentById,
  updateComment,
  deleteComment,
};
