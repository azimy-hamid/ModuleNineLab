const express = require("express");
const {
  createComment,
  getComments,
  getCommentById,
  updateComment,
  deleteComment,
} = require("../controllers/commentControllers.js");

const router = express.Router();

router.post("/", createComment);
router.get("/", getComments);
router.get("/:id", getCommentById);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

module.exports = router;
