// 일반적인 DB 연결시
// const mysql = require('mysql2');
// const connectionPool = mysql.createPool({
//     host : 'localhost',
//     user : 'root',
//     database : 'node-complete',
//     password : 'root'
// });

// Sequelize 사용해 
const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'root', {
    dialect : 'mysql',
    host : 'localhost'
});

module.exports = sequelize;