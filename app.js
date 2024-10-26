const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRouter =  require('./routes/admin');
const shopRouter =  require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false})); // body-parser 미들웨어 등록. extended 는 비표준 대상 분석 가능 여부

app.use('/admin', adminRouter);
app.use(shopRouter);


app.use((req, res, next) => {
    res.status(404).send('<h1>page not found 404 </h1>')
});
app.listen(3000); 