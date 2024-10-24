const express = require("express");

const router = express.Router();

const User = require("../models/userModel");

// CRUD operations

// GET All
router.get("/users", async (req, res) => {
  try {
    // Find all
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(`Error occured while fetching users: ${error}`);
    res.status(500).json({ message: error.message });
  }
});

// CREATE user
router.post("/users", async (req, res) => {
  try {
    // Create user
    const { name, age, weight } = req.body;
    const newUser = new User({ name, age, weight });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    console.log(`Error occured while creating user: ${error}`);
    res.status(500).json({ message: error.message });
  }
});

// UPDATE user
router.put("/users/:id", async (req, res) => {
  try {
    // Update user
    const { id } = req.params;
    const { name, weight } = req.body;
    // old value
    const updatedUser = await User.findByIdAndUpdate(id, { name, weight });
    if (!updatedUser) {
      res.status(400).json({ message: "user not found" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(`Error occured while updating user: ${error}`);
    res.status(500).json({ message: error.message });
  }
});

// DELETE user
router.delete("/users/:id", async (req, res) => {
  try {
    // Delete user
    const { id } = req.params;

    // old value
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      res.status(400).json({ message: "user not found" });
    }
    res.status(200).json(deletedUser);
  } catch (error) {
    console.log(`Error occured while deleting user: ${error}`);
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
