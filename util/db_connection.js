// 일반적인 DB 연결시
// const mysql = require('mysql2');
// const connectionPool = mysql.createPool({
//     host : 'localhost',
//     user : 'root',
//     database : 'node-complete',
//     password : 'root'
// });

import { Sequelize } from 'sequelize';

// Sequelize 인스턴스 생성
const sequelize = new Sequelize('node-complete', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default sequelize;