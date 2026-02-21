const express = require("express");
const router = express.Router();
const pool = require("../db");

// Get all instructors
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM instructors ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Add a new instructor
router.post("/", async (req, res) => {
  const { name, designation, image_url } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO instructors (name, designation, image_url) VALUES ($1,$2,$3) RETURNING *",
      [name, designation, image_url]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
