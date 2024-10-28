const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next)=> {
    console.log('In the add-product!');
    res.sendFile(path.join(rootDir,'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next)=> { // next는 사용하지 않으면 생략 가능.
    console.log('redirect product!');

    products.push({ title : req.body.title }); 
    res.redirect('/');    
});

exports.routes = router;
exports.products = products;


