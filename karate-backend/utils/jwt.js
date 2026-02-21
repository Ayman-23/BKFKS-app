const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET_KEY = process.env.JWT_SECRET || "supersecretkey";

// Generate token
function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role || "student", // optional role
    },
    SECRET_KEY,
    { expiresIn: "2h" }
  );
}

// Middleware to verify token
function verifyToken(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1]; // Bearer TOKEN
  if (!token) return res.status(401).json({ message: "Access denied. No token provided." });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // attach user info to request
    next();
  } catch (err) {
    return res.status(400).json({ message: "Invalid token." });
  }
}

module.exports = { generateToken, verifyToken };
