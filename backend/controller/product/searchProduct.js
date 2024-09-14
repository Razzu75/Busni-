const Product = require("../../models/productModel");

const searchProduct = async (req, res) => {
  try {
    const query = req.query.q;

    const regex = new RegExp(query, 'i');

    const product = await Product.findAll({
      where: {
        [Sequelize.Op.or]: [
          {
            productName: {
              [Sequelize.Op.iLike]: `%${query}%`
            }
          },
          {
            category: {
              [Sequelize.Op.iLike]: `%${query}%`
            }
          }
        ]
      }
    });

    res.json({
      data: product,
      message: "Search Product list",
      error: false,
      success: true
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false
    });
  }
};

module.exports = searchProduct;