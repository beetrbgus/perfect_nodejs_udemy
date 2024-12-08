const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const path = require('path');

const adminRoutes =  require('./routes/admin');
const shopRouter =  require('./routes/shop');
const sequelize = require('./util/db_connection');

app.set('view engine', 'pug');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false})); // body-parser 미들웨어 등록. extended 는 비표준 대상 분석 가능 여부

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRouter); 

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle : "Page Not Founded"}); 
});

sequelize.sync().then(result => {
    // console.log(result);
    app.listen(3000); 
})
.catch(err => {
    console.log(err);
});