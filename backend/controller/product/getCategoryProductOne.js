const Product = require("../../models/productModel");

const getCategoryProduct = async (req, res) => {
  try {
    const productCategories = await Product.findAll({
      attributes: [[Product.sequelize.fn('DISTINCT', Product.sequelize.col('category')), 'category']],
    });

    const productByCategory = [];

    for (const category of productCategories) {
      const product = await Product.findOne({ where: { category: category.category } });

      if (product) {
        productByCategory.push(product);
      }
    }

    res.json({
      message: "category product",
      data: productByCategory,
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

module.exports = getCategoryProduct;