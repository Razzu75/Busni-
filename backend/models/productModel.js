const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Product = sequelize.define("product", {
  _id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brandName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productImage: {
    type: DataTypes.JSON, // Using JSON to store array of strings
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  sellingPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  sold: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  timestamps: true,
  freezeTableName: true,
});

module.exports = Product;