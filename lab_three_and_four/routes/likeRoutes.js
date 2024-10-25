const express = require("express");
const {
  createLike,
  getLikes,
  getLikeById,
  deleteLike,
} = require("../controllers/likeControllers.js");
const router = express.Router();

router.post("/", createLike);
router.get("/", getLikes);
router.get("/:id", getLikeById);
router.delete("/:id", deleteLike);

module.exports = router;
