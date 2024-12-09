const {DataTypes} = require('sequelize');

const sequelize = require('../util/db_connection');

const Product = sequelize.define('product', {
    id : {
        type: DataTypes.BIGINT,
        autoIncrement : true,
        allowNull : false, 
        primaryKey : true
    },
    title : {
        type : DataTypes.STRING,
        allowNull : false, 
    },
    price : {
        type : DataTypes.INTEGER,
        allowNull : false, 
    },
    description : {
        type : DataTypes.STRING,
        allowNull : false, 
    },
    imageUrl : {
        type : DataTypes.STRING,
        allowNull : false,
    }
});

module.exports = Product;