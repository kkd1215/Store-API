const express = require('express');
const Controller = require('../controller');

const router = express.Router();

router.get('/url', (req, res) => {
  res.status(200).send(`OK - ${req.baseUrl}`);
});

/** GET /api/v1/products - GET ALL PRODUCTS */
router.get('/', Controller.getAllProducts);

/** GET /api/v1/products/static - GET ALL PRODUCTS STATIC*/
router.get('/static', Controller.getAllProductsStatic);

router.get('/populate', Controller.populate);


module.exports = router;