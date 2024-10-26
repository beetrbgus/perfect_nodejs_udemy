const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next)=> {
    console.log('In the add-product!');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit"> Add Product</button></form>');
});

router.post('/product', (req, res, next)=> { // next는 사용하지 않으면 생략 가능.
    console.log('redirect product!');
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;


