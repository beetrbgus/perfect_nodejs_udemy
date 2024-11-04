const Product = require('../models/product');

exports.getAddProduct = (req, res, next)=> {
    console.log('In the add-product!');
    // res.sendFile(path.join(rootDir,'views', 'admin/add-product.html'));
    res.render('admin/add-product', {pageTitle : "Add Product2", path : '/admin/add-product'}); 
}

exports.postAddProduct = (req, res, next)=> { // next는 사용하지 않으면 생략 가능.
    console.log('redirect product!');
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');    
}