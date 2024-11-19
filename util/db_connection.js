const mysql = require('mysql2');

const connectionPool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    database : 'node-complete',
    password : 'root'
});

module.exports = connectionPool.promise();