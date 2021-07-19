var express = require('express');
var router = express.Router();
var Product = require('../models/productModel');


router.get('/', function (req, res, next) {
    Product.find((err, products) => {
        if (err) throw err;
        res.render('../views/products/index', { productList: products })
    })
});

router.get('/create', (req, res) => {
    res.render('../views/products/create');
})

router.post('/save', function (req, res) {
    var product = new Product(req.body);
    Product.create(product, (err) => {
        if (err) throw err;
        res.redirect("/products")
    })
})

router.get('/:id', function (req, res, next) {
    Product.findById(req.params.id, (err, product) => {
        if (err) throw err;
        res.render('../views/products/product-detail',
            { product: product });
    });
});

module.exports = router;
