const User = require("../models/User.js");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Hash password before storing
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ ...req.body, password: hashedPassword });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({ where: { is_deleted: false } });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { user_id: req.params.id, is_deleted: false },
    });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email) {
      return res
        .status(400)
        .json({ message: "Username and email are required" });
    }

    // If password is provided, hash it
    let updatedData = { username, email };
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updatedData.password = hashedPassword;
    }

    const [updated] = await User.update(updatedData, {
      where: { user_id: req.params.id, is_deleted: false },
    });
    if (!updated) return res.status(404).json({ message: "User not found" });

    const user = await User.findByPk(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const [updated] = await User.update(
      { is_deleted: true },
      { where: { user_id: req.params.id } }
    );
    if (!updated) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const recoverUser = async (req, res) => {
  try {
    const [updated] = await User.update(
      { is_deleted: false },
      { where: { user_id: req.params.id } }
    );
    if (!updated) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User recovered successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  recoverUser,
};
