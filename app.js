const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false})); // body-parser 미들웨어 등록. extended 는 비표준 대상 분석 가능 여부

app.use('/', (req, res, next)=>{
    console.log('항상 작동함');
    next(); // next가 있으면 다음 라우트로 전달 됨
});


app.use('/add-product', (req, res, next)=> {
    console.log('In the add-product!');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit"> Add Product</button></form>');
});

app.use('/product', (req, res, next)=> { // next는 사용하지 않으면 생략 가능.
    console.log('redirect product!');
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next)=> {
    console.log('In the middleware!');
    res.send('<h1>Hello from Express!');
});


app.listen(3000); 