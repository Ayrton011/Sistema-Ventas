//Llamando nuestro modelo
const Categoria = require('../modelos/Categoria');

exports.getTodaslasCategorias = async (peticion, respuesta) =>  {
    try  {
        const categorias = await Categoria.findAll();
        respuesta.json(categorias)

    }  catch (error)  {
        console.log(error);
        res.status(500).send('Error del servidor');
    }

};