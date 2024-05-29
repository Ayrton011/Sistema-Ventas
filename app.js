const express = require('express');
const categoriaRutas = require('./rutas/categoriaRutas');
const articuloRutas = require('./rutas/articuloRutas');
const app = express();
//middleware
app.use(express.json());
//Rutas
app.use('/api/categorias', categoriaRutas);
app.use('/api/articulos', articuloRutas);
//configurar el servidor
const PORT = 3000;
app.listen(PORT, () =>  {
    console.log('servidor levantado http://localhost:' +PORT);

});