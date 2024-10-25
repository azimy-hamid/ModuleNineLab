const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserById,
} = require("../controllers/microServiceControllers.js");

// Route to get users with pagination
router.get("/users", getUsers);

// Route to get a specific user by ID
router.get("/users/:id", getUserById);

module.exports = router;
