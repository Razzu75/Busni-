const Product = require("../../models/productModel");

const getCategoryWiseProduct = async (req, res) => {
  try {
    const { category } = req.body || req.query;
    const products = await Product.findAll({ where: { category } });

    // Convert string to JSON
    products.map((product) => {
      product.productImage = JSON.parse(product.productImage);
    });

    res.json({
      data: products,
      message: "Product",
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = getCategoryWiseProduct;