const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/add-product', (req, res, next)=> {
    console.log('In the add-product!');
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

router.post('/product', (req, res, next)=> { // next는 사용하지 않으면 생략 가능.
    console.log('redirect product!');
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;


