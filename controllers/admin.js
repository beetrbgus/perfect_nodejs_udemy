const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    console.log('In the add-product!');
    // res.sendFile(path.join(rootDir,'views', 'admin/add-product.html'));
    res.render('admin/edit-product', {
        pageTitle : "Add Product2", 
        path : '/admin/add-product',
        editing : false,
    }); 
}

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    
    if(!editMode) {
        return res.redirect('/');
    }
    const productId = req.params.productId;
    Product.findById(productId, product => {
        // res.sendFile(path.join(rootDir,'views', 'admin/add-product.html'));
        if(!product) {
            return res.redirect('/');
        }
        console.log("aaaaaaaaaaaaa ", product);
        res.render('admin/edit-product', {
            pageTitle : "Edit Product2",
            path : '/admin/add-product',
            editing : editMode,
            product : product
        });

    });
    }

exports.postAddProduct = (req, res, next) => { // next는 사용하지 않으면 생략 가능.
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

exports.getEditProducts = (req, res, next) => {
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

exports.postEditProduct = (req, res, next) => {
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

exports.deleteProduct = (req, res, next) => {
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
