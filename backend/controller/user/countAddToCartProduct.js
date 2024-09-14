const CartProduct = require("../../models/cartProduct")

const countAddToCartProduct = async (req, res) => {
  try {
    const userId = req.userId;

    const count = await CartProduct.count({
      where: {
        userId: userId,
      },
    });

    res.json({
      data: {
        count: count,
      },
      message: "ok",
      error: false,
      success: true,
    });
  } catch (error) {
    res.json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

module.exports = countAddToCartProduct;