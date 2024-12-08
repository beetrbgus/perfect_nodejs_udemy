const Sequelize = require('sequelize');

const sequelize = require('../util/db_connection');

const Product = sequelize.define('product', {
    id : {
        type: Sequelize.BIGINT,
        autoIncrement : true,
        allowNull : false, 
        primaryKey : true
    },
    title : {
        type : Sequelize.STRING,
        allowNull : false, 
    },
    price : {
        type : Sequelize.INTEGER,
        allowNull : false, 
    },
    description : {
        type : Sequelize.STRING,
        allowNull : false, 
    },
    imageUrl : {
        type : Sequelize.STRING,
        allowNull : false,
    }
});

module.exports = Product;