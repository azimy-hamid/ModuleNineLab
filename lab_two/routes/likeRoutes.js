const express = require("express");
const {
  likePost,
  getLikesForPost,
  removeLike,
} = require("../controllers/likeControllers.js");
const router = express.Router();

router.post("/", likePost); // Like a post
router.get("/post/:postId", getLikesForPost); // Get likes for a specific post
router.delete("/:id", removeLike); // Remove a like

module.exports = router;
