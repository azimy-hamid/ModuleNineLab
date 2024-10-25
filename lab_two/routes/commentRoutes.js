const express = require("express");
const {
  createComment,
  getCommentsForPost,
  updateComment,
  deleteComment,
} = require("../controllers/commentControllers.js");
const router = express.Router();

router.post("/", createComment); // Create a comment
router.get("/post/:postId", getCommentsForPost); // Get comments for a specific post
router.put("/:id", updateComment); // Update a comment
router.delete("/:id", deleteComment); // Delete a comment

module.exports = router;
