const CartProduct = require("../../models/cartProduct");

const updateAddToCartProduct = async (req, res) => {
  try {
    const addToCartProductId = req?.body?._id;
    const qty = req.body.quantity;

    if (!addToCartProductId) {
      return res.status(400).json({
        message: "Product ID is required",
        error: true,
        success: false,
      });
    }

    if (qty === undefined) {
      return res.status(400).json({
        message: "Quantity is required",
        error: true,
        success: false,
      });
    }

    const updateProduct = await CartProduct.update(
      { quantity: qty },
      {
        where: { id: addToCartProductId },
        returning: true, // Return the updated document
        plain: true,
      }
    );

    if (!updateProduct[1]) {
      return res.status(404).json({
        message: "Product not found",
        error: true,
        success: false,
      });
    }

    res.json({
      message: "Product Updated",
      data: updateProduct[1],
      error: false,
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: err?.message || "Internal Server Error",
      error: true,
      success: false,
    });
  }
};

module.exports = updateAddToCartProduct;