const logger = require('../../../lib/logger')
const { model: ProductModel } = require('..');

const getAllProductsStatic = async (req, res, next) => {
  try {
    const { query } = req;
    const allProducts = await ProductModel.find({feature: true});
    return res.status(200).json({allProducts, nbHits: allProducts.length})
  } catch(err) {
    logger.error('ERROR > GET_ALL_PRODUCT_STATIC > ', err);
    return next(err);
  }
} 

module.exports = getAllProductsStatic