const products = [];
const path = require('path');
const rootDir = require('../util/path');

exports.getAddProduct = (req, res, next)=> {
    console.log('In the add-product!');
    res.sendFile(path.join(rootDir,'views', 'add-product.html'));
    res.render('add-product', {pageTitle : "Add Product2"});
}

exports.postAddProduct = (req, res, next)=> { // next는 사용하지 않으면 생략 가능.
    console.log('redirect product!');

    products.push({ title : req.body.title }); 
    res.redirect('/');    
}

exports.getProducts = (req, res, next)=> {
    console.log('In the middleware!');
    console.log('shop.js', products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html')); // html 전달하는 방식의 렌더링
    res.render('shop', {prods : products, docTitle : "Shop"});
}