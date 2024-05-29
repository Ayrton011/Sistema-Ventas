const Sequelize = require('sequelize');

const conexion = new Sequelize('dbsistema', 'root', '',  {
    host: 'localhost',
    dialect: 'mysql' ,
    define: {
        timestamps : false

    }
});
//exportar
module.exports = conexion;