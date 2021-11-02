const getAllProducts = require('./get-all-products');
const getAllProductsStatic = require('./get-all-products-static');
const populate = require('./populate');

const Controller = {
  getAllProducts,
  getAllProductsStatic,
  populate
};

module.exports = Controller;