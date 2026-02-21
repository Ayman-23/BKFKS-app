const express = require("express");
const router = express.Router();
const pool = require("../db"); // your db.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Login
router.post("/login", async (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const tableName =
      role === "management" ? "management" :
      role === "trainer" ? "trainers" :
      role === "student" ? "students" : null;

    if (!tableName)
      return res.status(400).json({ message: "Invalid role" });

    // Find user by email
    const result = await pool.query(
      `SELECT * FROM ${tableName} WHERE email=$1`,
      [email]
    );

    const user = result.rows[0];

    if (!user)
      return res.status(401).json({ message: "Invalid credentials" });

    // Compare password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(401).json({ message: "Invalid credentials" });

    // Generate JWT
    const token = jwt.sign(
      { id: user.id, role: role, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.json({ token, user: { id: user.id, email: user.email, role } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
