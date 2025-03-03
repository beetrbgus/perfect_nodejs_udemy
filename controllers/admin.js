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
    const prodId = req.params.productId;

    Product.findByPk(prodId)
    .then(product => {
        if(!product) {
            return res.redirect('/');
        }

        res.render('admin/edit-product', {
            pageTitle : "Edit Product2",
            path : '/admin/add-product',
            editing : editMode,
            product : product
        });
    })
    .catch(err => console.log(err));
}

exports.postAddProduct = (req, res, next) => { // next는 사용하지 않으면 생략 가능.
    console.log('redirect product!');
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;

    Product.create({
        title : title,
        price : price,
        description : description,
        imageUrl : imageUrl,
    }).then(result => {
        console.log(result);
        res.redirect('/');
    }).catch(err => {
        console.log(err);
    });
}

exports.getProducts = (req, res, next) => {
    console.log("admin getProducts");
    Product.findAll()
    .then(products => {
        console.log('In the products', products);
        // res.sendFile(path.join(rootDir, 'views', 'shop.html')); // html 전달하는 방식의 렌더링
        res.render('admin/products', {
            prods : products, 
            pageTitle : "Admin Products",
            path: '/admin/products'
        });
    })
    .catch(err => {
        console.log(err);
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
    const productId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDescription = req.body.description;
    console.log("postEditProduct : ",productId );

    Product.findByPk(productId)
    .then(product => {
        product.title = updatedTitle;
        product.price = updatedPrice;
        product.imageUrl = updatedImageUrl;
        product.description = updatedDescription;

        return product.save();
    })
    .then(result => {
        console.log("UPDATED PRODUCT");
    })
    .catch(err => console.log(err));

    res.redirect('/admin/products'); 
}

exports.deleteProduct = (req, res, next) => {
    const productId = req.body.productId;
    Product.deleteById(productId);
    res.redirect('/admin/products');
}
