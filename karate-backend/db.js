
// // db.js
// const { Pool } = require("pg");
// require("dotenv").config();

// console.log("DB_USER:", process.env.DB_USER);
// console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
// console.log("DB_PORT:", process.env.DB_PORT);

// // Create a PostgreSQL pool using .env variables
// const pool = new Pool({
//   user: process.env.kickuser,       // kickuser
//   host: process.env.localhost,       // localhost
//   database: process.env.kickfighter,   // kickfighter
//   password: String(process.env.kickuser), // kickuser
//   port: parseInt(process.env.DB_PORT, 10),       // 5432
// });

// // Test connection
// pool.connect((err, client, release) => {
//   if (err) {
//     return console.error("Error acquiring client", err.stack);
//   }
//   console.log("Connected to PostgreSQL database!");
//   release();
// });

// module.exports = pool;

// db.js
const { Pool } = require("pg");
require("dotenv").config();

// Debug: check environment variables
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_PORT:", process.env.DB_PORT);

// Create a PostgreSQL pool using .env variables
const pool = new Pool({
  user: process.env.DB_USER,       // kickuser
  host: process.env.DB_HOST,       // localhost
  database: process.env.DB_NAME,   // kickfighter
  password: process.env.DB_PASSWORD, // kickuser
  port: parseInt(process.env.DB_PORT, 10), // 5432
});

// Test connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }
  console.log("✅ Connected to PostgreSQL database!");
  release();
});

module.exports = pool;

