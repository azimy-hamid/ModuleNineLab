const Like = require("../models/Like.js");

// Like a post
const likePost = async (req, res) => {
  try {
    const like = new Like(req.body);
    await like.save();
    res.status(201).send(like);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get likes for a post
const getLikesForPost = async (req, res) => {
  try {
    const likes = await Like.find({ postId: req.params.postId });
    res.status(200).send(likes);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Remove like from a post
const removeLike = async (req, res) => {
  try {
    const like = await Like.findByIdAndDelete(req.params.id);
    if (!like) return res.status(404).send("Like not found");
    res.status(200).send({ message: "Like removed successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { likePost, getLikesForPost, removeLike };
