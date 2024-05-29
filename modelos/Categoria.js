const  { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Categoria = sequelize.define('categoria', {
    idcategoria :  {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    nombre :  {
        type : DataTypes.STRING,
        allowNull: false
    }
});
module.exports = Categoria;