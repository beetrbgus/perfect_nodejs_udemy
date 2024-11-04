const express = require('express');
const path = require('path');

const router = express.Router();

const shopController = require('../controllers/shop');

// router.use('/', (req, res, next)=>{ // use => spring에서 @RequestMapping 느낌
//     console.log('항상 작동함');
//     next(); // next가 있으면 다음 라우트로 전달 됨
// });

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
