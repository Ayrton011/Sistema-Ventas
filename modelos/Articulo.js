const  { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Categoria = require('./Categoria');

const Articulo = sequelize.define('articulo',{
    idarticulo : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idcategoria : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : Categoria,
            key : 'idcategoria'
        }
    },
    nombre : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    stock : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    descripcion : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    condicion : {
        type : DataTypes.BOOLEAN,
        allowNull : false,
    }
}, {freezeTableName:true})
module.exports = Articulo;