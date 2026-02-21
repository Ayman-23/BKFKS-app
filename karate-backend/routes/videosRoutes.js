
const express = require("express");
const router = express.Router();
const pool = require("../db");

// Get all videos
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM videos ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Add a new video
router.post("/", async (req, res) => {
  const { title, level, url } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO videos (title, level, url) VALUES ($1,$2,$3) RETURNING *",
      [title, level, url]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
