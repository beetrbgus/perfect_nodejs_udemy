const Product = require('../models/product');

exports.getAddProduct = (req, res, next)=> {
    console.log('In the add-product!');
    // res.sendFile(path.join(rootDir,'views', 'admin/add-product.html'));
    res.render('admin/add-product', {pageTitle : "Add Product2", path : '/admin/add-product'}); 
}

exports.postAddProduct = (req, res, next)=> { // next는 사용하지 않으면 생략 가능.
    console.log('redirect product!');
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;

    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/');    
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products)=> {
        console.log('In the products', products);
        // res.sendFile(path.join(rootDir, 'views', 'shop.html')); // html 전달하는 방식의 렌더링
        res.render('admin/products', {
            prods : products, 
            pageTitle : "Admin Products",
            path: '/admin/products'
        });
    });
}