const express = require('express');
const categoriaRutas = require('./rutas/categoriaRutas');
const app = express();
//middleware
app.use(express.json());
//Rutas
app.use('/api/libros', categoriaRutas)
//configurar el servidor
const PORT = 3000;
app.listen(PORT, () =>  {
    console.log('servidor levantado http://localhost:' +PORT);
});