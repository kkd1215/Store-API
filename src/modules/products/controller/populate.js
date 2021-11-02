//Connect to DB
const connectDB = require('../../../lib/database');
const { model: ProductModel } = require('..');

const logger = require('../../../lib/logger')
const productData = require('../../../../products.json');

const populate = async (req,res) => {
  try {
    await connectDB();
    await ProductModel.deleteMany();
    await ProductModel.create(productData)
    res.status(201).send('Dummy products successfully added');
  } catch (err) {
    logger.error('ERROR > POPULATE_DATA > ', err);
    return next(err);
  }
}

module.exports = populate;