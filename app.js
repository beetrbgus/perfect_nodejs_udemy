const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const path = require('path');

const adminRoutes =  require('./routes/admin');
const shopRouter =  require('./routes/shop');
const errorRouter = require('./routes/error');

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false})); // body-parser 미들웨어 등록. extended 는 비표준 대상 분석 가능 여부

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRouter); 
app.use(errorRouter);

app.listen(3000); 