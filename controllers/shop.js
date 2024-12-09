const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next)=> {
    Product.findAll()
    .then(products => {
        // res.sendFile(path.join(rootDir, 'views', 'shop.html')); // html 전달하는 방식의 렌더링
        res.render('shop/product-list', {
            prods : products, 
            pageTitle : "Shop",
            path: '/products'
        });
    })
    .catch(err => {
        console.log(err);
    });
}

exports.getProduct = (req, res, next) => {
    const productId = req.params.productId;
    Product.findById(productId)
    .then(([product]) => {
        // res.sendFile(path.join(rootDir,'views', 'admin/add-product.html')); // 파일로 보내는 법
        console.log("product");
        console.log(product);
        
        if(!product) {
            return res.redirect('/');
        }
        res.render('shop/product-detail', {
            pageTitle : product[0].title,
            path : '/products',
            product : product[0]
        });
    }).catch(err => console.log(err)); 
}

exports.getIndex = (req, res, next) => {
Product.findAll()
    .then(products => {
        // res.sendFile(path.join(rootDir, 'views', 'shop.html')); // html 전달하는 방식의 렌더링
        res.render('shop/product-list', {
            prods : products, 
            pageTitle : "Shop",
            path: '/products'
        });
    })
    .catch(err => {
        console.log(err);
    });
}

exports.postCart = (req, res, next) => {
    const productId = req.body.productId;
    console.log("postCart's productId is ", productId);
    Product.findById(productId)
    .then(([row, fieldData]) => {
        Cart.addProduct(productId, row.price);
    });
    res.redirect('/cart');
}

exports.getCart = (req, res, next) => {
    Cart.getCarts( carts => {
        Product.fetchAll(products => {
            const cartProducts = [];
            
            for(product of products) {
                const cartProductData = carts.products.find(prod => prod.id === product.id);
                console.log("get Cart"); 
                console.log(product);
                if(cartProductData) {
                    cartProducts.push({productData : product, qty : cartProductData.qty });
                }
            }
            res.render('shop/cart', {
                path: '/cart',
                pageTitle: 'Your Cart',
                products : cartProducts
            });
        });
    });       
}

exports.deleteCart = (req, res, next) => {
    const productId = req.body.productId;
    console.log("deleteCart's productId is ", productId);
    Product.findById(productId, product => {
        Cart.deleteProduct(product.id, product.price);

        res.redirect('/cart')
    });
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders'
    });
}
exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
}