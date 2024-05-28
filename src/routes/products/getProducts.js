const express = require('express');
const router = express.Router();
const { getProducts } = require('../../controllers/products/productController');
const { authenticate } = require('../../middlewares/auth');

router.route('/').get(authenticate, getProducts)

module.exports = router;