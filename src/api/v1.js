const express = require('express');
const ProductRoutes = require('../modules/products/routes/v1');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send(`OK - ${req.baseUrl}`);
});

router.use('/products', ProductRoutes);

module.exports = router;