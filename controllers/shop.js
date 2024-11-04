const Product = require('../models/product');

const path = require('path');
const rootDir = require('../util/path');



exports.getProducts = (req, res, next)=> {
    Product.fetchAll((products)=> {
        console.log('In the products', products);
        // res.sendFile(path.join(rootDir, 'views', 'shop.html')); // html 전달하는 방식의 렌더링
        res.render('shop/product-list', {
            prods : products, 
            pageTitle : "Shop",
            path: '/products'
        });
    });
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
            prods : products, 
            pageTitle : "Shop",
            path: '/',
        })
    })
}


exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'
    });
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
}