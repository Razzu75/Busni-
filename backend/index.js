const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const { connectDB } = require("./config/db"); // Ensure this is the correct path to your Sequelize connection
const router = require("./routes"); // Ensure this is the correct path to your routes

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Connect to MySQL
try {
  connectDB();
} catch (error) {
  console.error("Error connecting to database: ", error);
}

// Use routes
app.use("/api", router); // Ensure that router is properly configured

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
