const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const AddToCart = sequelize.define(
  "addtocart",
  {
    productId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "product",
        key: "productId",
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1, 
      },
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "user",
        key: "userId",
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  },
  {
    timestamps: true, 
    freezeTableName: true,
  }
);

module.exports = AddToCart;
