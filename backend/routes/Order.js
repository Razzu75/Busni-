// routes/order.js
const express = require("express");
const router = express.Router();
const Order = require("../models/order");

router.post("/api/create", async (req, res) => {
  try {
    const { products, address, totalQty, totalPrice, paymentMethod } = req.body;

    if (!products || !address || !totalQty || !totalPrice || !paymentMethod) {
      return res.status(400).json({ success: false, message: "Invalid data" });
    }

    const newOrder = await Order.create({
      products,
      address,
      totalQty,
      totalPrice,
      paymentMethod,
    });

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order: newOrder,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;