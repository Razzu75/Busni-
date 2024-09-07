const addToCartModel = require("../../models/cartProduct");

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

    const updateProduct = await addToCartModel.findByIdAndUpdate(
      addToCartProductId,
      { quantity: qty },
      { new: true } // Return the updated document
    );

    if (!updateProduct) {
      return res.status(404).json({
        message: "Product not found",
        error: true,
        success: false,
      });
    }

    res.json({
      message: "Product Updated",
      data: updateProduct,
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
