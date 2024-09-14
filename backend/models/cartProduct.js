const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const AddToCart = sequelize.define(
  "addToCart",
  {
    productId: {
      type: DataTypes.STRING,
      references: {
        model: "products", // name of the target model
        key: "id", // key in the target model that we're referencing
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = AddToCart;
