var express = require('express');
var productController  =require('../controllers/productController')

var router = express.Router();
// GET
router.get('/', productController.getProducts);

// POST
router.post('/create', productController.createProducts);

module.exports = router;