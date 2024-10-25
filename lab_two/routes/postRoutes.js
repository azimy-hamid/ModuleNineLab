const express = require("express");
const {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
} = require("../controllers/postControllers.js");
const router = express.Router();

router.post("/", createPost); // Create a post
router.get("/", getPosts); // Get all posts
router.get("/:id", getPostById); // Get a post by ID
router.put("/:id", updatePost); // Update a post by ID
router.delete("/:id", deletePost); // Delete a post by ID

module.exports = router;
