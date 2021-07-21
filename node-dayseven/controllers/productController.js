var Product = require('../models/productModel');

module.exports.getAllProducts = (req, res, next) => {
    if (req.isAuthenticated()) {
        Product.find((err, products) => {
            if (err) throw err;
            console.log(products);
            res.render('../views/products/index', { productList: products })
        })
    } else {
        res.render('../views/users/login');
    }
};

module.exports.getProductById = function (req, res, next) {
    Product.findById(req.params.id, (err, product) => {
        if (err) throw err;
        res.render('../views/products/product-detail',
            { product: product });
    });
};

module.exports.createProduct = (req, res) => {
    res.render('../views/products/create');
};

module.exports.saveProduct = (req, res) => {
    var product = new Product(req.body);
    Product.create(product, (err) => {
        if (err) throw err;
        res.redirect("/products")
        // res.send('Product Added Successfully.');
    })
}

module.exports.deleteProduct = (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (err) throw err;
        if (!product) return res.status(404).send('Product doesnt exist with this Id.');
        Product.findByIdAndRemove(req.params.id, (err) => {
            if (err) throw err;
            res.redirect("/products");
        })
    })
}

module.exports.updateProduct = (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (err) throw err;
        if (!product) return res.status(404).send('Product doesnt exist with this Id.');
        res.render('../views/products/product-update', { product: product })
    })
}

module.exports.editProduct = (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (err) throw err;
        if (!product) return res.status(404).send('Product doesnt exist with this Id.');
        var updatedProduct = {
            name: req.body.name,
            price: req.body.price,
            quantity: req.body.quantity
        };
        Product.findByIdAndUpdate(req.params.id, updatedProduct, (err) => {
            if (err) throw err;
            res.redirect("/products");
        });
    });
};