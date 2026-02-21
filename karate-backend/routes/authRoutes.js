// const express = require("express");
// const router = express.Router();
// const pool = require("../db"); // your db.js
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// // Login
// router.post("/login", async (req, res) => {
//   const { email, password, role } = req.body;

//   if (!email || !password || !role) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   let query = "";

//   if (role === "management") {
//     query = "SELECT * FROM management WHERE email=$1";
//   } 
//   else if (role === "trainer") {
//     query = "SELECT * FROM trainers WHERE email=$1";
//   } 
//   else if (role === "student") {
//     query = "SELECT * FROM students WHERE email=$1";
//   } 
//   else {
//     return res.status(400).json({ message: "Invalid role" });
//   }

//   try {

//     const result = await pool.query(query, [email]);
//     const user = result.rows[0];

//     if (!user) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     const validPassword = await bcrypt.compare(password, user.password);

//     if (!validPassword) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     const token = jwt.sign(
//       {
//         id: user.id,
//         role: role,
//         email: user.email
//       },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );

//     res.json({
//       token,
//       user: {
//         id: user.id,
//         email: user.email,
//         role
//       }
//     });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/login", authController.login);

module.exports = router;
