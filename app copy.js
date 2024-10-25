// Express 쓰기 전 카피본
const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes.handler);
console.log(routes.someText);
server.listen(3000); 