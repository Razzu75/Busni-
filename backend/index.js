const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const { connectDB } = require("./config/db");
const router = require("./routes");
const { sequelize } = require("./config/db");
const Product = require("./models/productModel");
const AddToCart = require("./models/cartProduct");
const User = require("./models/userModel");

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

// Define relationships
Product.hasMany(AddToCart, { foreignKey: "productId", constraints: false });
AddToCart.belongsTo(Product, { foreignKey: "productId", constraints: false });

User.hasMany(AddToCart, { foreignKey: "userId", constraints: false });
AddToCart.belongsTo(User, { foreignKey: "userId", constraints: false });

// Connect to MySQL
try {
  connectDB();
} catch (error) {
  console.error("Error connecting to database: ", error);
}

// Sync database
// const syncModels = async () => {
//   try {
// Sync the User table
// await User.sync({ alter: true });
// console.log("User table created.");

// Sync the Product table
//     await Product.sync({ alter: true });
//     console.log("Product table created.");

//     // Sync the AddToCart table
//     await AddToCart.sync({ alter: true });
//     console.log("AddToCart table created.");
//   } catch (error) {
//     console.error("Error syncing tables:", error);
//   }
// };

// syncModels();

// Use routes
app.use("/api", router); // Ensure that router is properly configured

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
