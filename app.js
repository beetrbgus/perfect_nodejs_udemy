const express = require('express');

const app = express();

app.use('/', (req, res, next)=>{
    console.log('항상 작동함');
    next(); // next가 있으면 다음 라우트로 전달 됨
});


app.use('/add-product', (req, res, next)=>{
    console.log('In the add-product!');
    res.send('<h1>Add Product 페이지!');
});

app.use('/', (req, res, next)=>{
    console.log('In the middleware!');
    res.send('<h1>Hello from Express!');
});


app.listen(3000); 