const Product = require("../../models/productModel");

const filterProductController = async (req, res) => {
  try {
    const categoryList = req?.body?.category || [];

    const product = await Product.findAll({
      where: {
        category: {
          [Sequelize.Op.in]: categoryList,
        },
      },
    });

    product.map((product) => {
      product.productImage = JSON.parse(product.productImage);
    });

    res.json({
      data: product,
      message: "product",
      error: false,
      success: true,
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = filterProductController;