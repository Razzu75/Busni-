const CartProduct = require("../../models/cartProduct");
const Product = require("../../models/productModel"); // Assuming you have a Product model

const addToCartViewProduct = async (req, res) => {
  try {
    const currentUser = req.userId;

    const allProduct = await CartProduct.findAll({
      where: {
        userId: currentUser,
      },
      include: [{
        model: Product,
        as: 'product', // Adjust the alias as per your association definition
      }],
    });

    // Convert string to JSON
    allProduct.map((product) => {
      product.product.productImage = JSON.parse(product.product.productImage);
    });

    res.json({
      data: allProduct,
      success: true,
      error: false,
    });

  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = addToCartViewProduct;