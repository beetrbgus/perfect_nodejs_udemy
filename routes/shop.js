const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

// router.use('/', (req, res, next)=>{ // use => spring에서 @RequestMapping 느낌
//     console.log('항상 작동함');
//     next(); // next가 있으면 다음 라우트로 전달 됨
// });

router.get('/', (req, res, next)=> {
    console.log('In the middleware!');
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
