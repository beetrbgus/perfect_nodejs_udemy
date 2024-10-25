const express = require('express');

const app = express();

app.use((req, res, next)=>{
    console.log('In the middleware!');
    next(); // 요청을 다음으로 넘기기 위해서는 next 필요. next 없다면 아래의 use 함수 호출되지 않음.
});

app.use((req, res, next)=>{
    console.log('In other middleware!');
    // res.setHeader에 기본적으로 html/text 로 되어있음. 수동 설정 가능.
    res.send('<h1>Hello from Express!');
});

app.listen(3000); 