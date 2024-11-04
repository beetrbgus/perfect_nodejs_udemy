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
            path: '/',
            hasProducts : products.length > 0,
            activeShop : true,
            productCSS : true
        });
    });
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
            prods : products, 
            pageTitle : "Shop",
            path: '/',
            hasProducts : products.length > 0,
            activeShop : true,
            productCSS : true
        })
    })
}