const Product = require("../../models/productModel");

const getProductController = async (req, res) => {
  try {
    const allProduct = await Product.findAll({
      order: [['createdAt', 'DESC']],
    });

    // Convert string to JSON
    allProduct.map((product) => {
      product.productImage = JSON.parse(product.productImage);
    });

    res.json({
      message: "All Products",
      success: true,
      error: false,
      data: allProduct,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = getProductController;