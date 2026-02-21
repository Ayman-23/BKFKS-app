const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);


// Middleware
app.use(cors());
app.use(express.json());

// Routes
const classesRoutes = require("./routes/classesRoutes");
const instructorsRoutes = require("./routes/instructorsRoutes");
const videosRoutes = require("./routes/videosRoutes");

app.use("/api/classes", classesRoutes);
app.use("/api/instructors", instructorsRoutes);
app.use("/api/videos", videosRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Karate School Backend Running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
