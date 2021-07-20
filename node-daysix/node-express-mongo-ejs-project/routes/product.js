var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController');

// POST Request: http://localhost:3000/products
router.get('/', productController.getAllProducts);

// GET Request: http://localhost:3000/products/create
router.get('/create', productController.createProduct);

// POST Request: http://localhost:3000/products/save
router.post('/save', productController.saveProduct);

// GET Request: http://localhost:3000/products/60f59cec7745c52930bff5e1
router.get('/:id', productController.getProductById);

// DELETE Request: http://localhost:3000/products/60f59cec7745c52930bff5e1
router.post('/delete/:id', productController.deleteProduct);

// GET Request: http://localhost:3000/products/60f59cec7745c52930bff5e1
router.get('/update/:id', productController.updateProduct);

// UPDATE Request: http://localhost:3000/products/60f59cec7745c52930bff5e1
router.post('/edit/:id', productController.editProduct);

module.exports = router;


