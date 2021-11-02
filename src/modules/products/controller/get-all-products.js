const logger = require('../../../lib/logger');
const {model: ProductModel} = require('..')

const getAllProducts = async (req, res, next) => {
  try {
    const { feature, company, name, sort, fields, numericFilters } = req.query;
    const queryObj = {};
    let limit = req.query.limit ? Number(req.query.limit) : 10;
    let page = req.query.page ? Number(req.query.page) : 1;
    
    
    if (feature) {
      queryObj.feature = feature === 'true' ? true : false;
    }
    
    if (company) {
      queryObj.company = company;
    }
    
    if (name) {
      queryObj.name = { $regex: name, $options: 'i' };
    }
    
    if (numericFilters) {
      const operatorMap = {
        '>': '$gt',
        '>=': '$gte',
        '=': '$eq',
        '<': '$lt',
        '<=' : '$lte',
      };
      const regEx = /\b(<|<=|=|>|>=)\b/g;
      let filters = numericFilters.replace(regEx, (match) => `-${operatorMap[match]}-`);
      const options = ['price', 'rating'];
      
      filters = filters.split(',').forEach((item) => {
        const [field, operator, value] = item.split('-');
        if (options.includes(field)) {
          queryObj[field] = { [operator] : Number(value) }
        }
      });
    }
    let result = ProductModel.find(queryObj);
    
    if (sort) {
      sortList = sort.split(',').join(' ');
      result = result.sort(sortList);
    } else {
      result = result.sort('createdAt');
    }
    
    if (fields) {
      fieldsList = fields.split(',').join(' ');
      result = result.select(fieldsList);
    }
    const allProducts = await result.limit(limit).skip((page - 1) * limit);

    return res.status(200).json({nbHits: allProducts.length, allProducts})
  } catch(err) {
    logger.error('ERROR > GET_ALL_PRODUCT > ', err);
    return next(err);
  }
} 

module.exports = getAllProducts