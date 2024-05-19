const  { DataTypes } = require('sequeliza');
const sequelize = require('../config/database');

const Categoria = sequelize.define('nombre', {
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