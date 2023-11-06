const express = require('express');
const router = express.Router();
const productController = require('./../controllers/product.controller');

router.post('/', productController.addProduct);

router.delete('/:id', productController.deleteProduct);

router.get('/products', productController.getProductList);

module.exports = router;
