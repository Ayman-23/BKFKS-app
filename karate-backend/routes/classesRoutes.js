const express = require("express");
const router = express.Router();
const pool = require("../db");

// Get all classes
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM classes ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Add a new class
router.post("/", async (req, res) => {
  const { day, start_time, end_time, session } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO classes (day, start_time, end_time, session) VALUES ($1,$2,$3,$4) RETURNING *",
      [day, start_time, end_time, session]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

const { verifyToken } = require("../utils/jwt");

// Apply middleware
router.get("/", verifyToken, async (req, res) => {
  // only logged-in users can access
  const result = await pool.query("SELECT * FROM Classes");
  res.json(result.rows);
});

module.exports = router;
