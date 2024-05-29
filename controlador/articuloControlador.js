const Articulo = require('../modelos/Articulo');

exports.getTodoslosArticulos = async (peticion, respuesta) =>  {
    try  {
        const articulos = await Articulo.findAll();
        respuesta.json(articulos)

    }  catch (error)  {

        console.log(error);
        respuesta.status(500).send( error);
    }

};

exports.crearArticulo = async (peticion, respuesta) => {
    try {
        const nuevoArticulo = await Articulo.create(peticion.body);
        respuesta.status(201).json(nuevoArticulo);
    } 
    catch (error) {
        console.log(error);
        respuesta.status(500).send(error);
    }
};