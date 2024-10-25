const axios = require("axios");

const BASE_URL = "https://jsonplaceholder.typicode.com";

const getUsers = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query; // Default pagination if not specified
    const response = await axios.get(`${BASE_URL}/users`);

    // Simple pagination logic
    const startIndex = (page - 1) * limit;
    const paginatedData = response.data.slice(
      startIndex,
      startIndex + parseInt(limit)
    );

    res.status(200).json(paginatedData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${BASE_URL}/users/${id}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(404).json({ message: "User not found", error });
  }
};

module.exports = {
  getUsers,
  getUserById,
};
