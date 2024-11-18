const Product = require('../models/product');
const Cart = require('../models/cart');

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

exports.getProduct = (req, res, next) => {
    const productId = req.params.productId;
    Product.findById(productId, product => {
        console.log("product is ", product);
        res.render('shop/product-detail', {
            product : product,
            pageTitle : product.title,
            path: '/product/' + product.id,
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

exports.postCart = (req, res, next) => {
    const productId = req.body.productId;
    console.log("postCart's productId is ", productId);
    Product.findById(productId, (product)=> {
        Cart.addProduct(productId, product.price);
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