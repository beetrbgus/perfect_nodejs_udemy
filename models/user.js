const {DataTypes} = require('sequelize');
const sequelize = require('../util/db_connection');

const User = sequelize.define('user', {
    id : {
        type: DataTypes.BIGINT,
        autoIncrement : true,
        allowNull : false, 
        primaryKey : true
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false, 
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false, 
    },
});

module.exports = User;
