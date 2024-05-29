//Llamando nuestro modelo
const Categoria = require('../modelos/Categoria');
const { Op } = require('sequelize');

exports.getTodaslasCategorias = async (peticion, respuesta) =>  {
    try  {
        const categorias = await Categoria.findAll();
        respuesta.json(categorias)

    }  catch (error)  {
        console.log(error);
        res.status(500).send('Error del servidor');
    }
};
    exports.getCategoriaPorId = async (peticion, respuesta) =>  {
        try  {
            const { id } = peticion.params;
            const categoria = await Categoria.findByPk(id);
            if (categoria)
                respuesta.json(categoria);
            else
                respuesta.status(404).send({mensaje: 'Categoria no encontrada'})
        }  
        catch (error)  {
            console.log(error);
            res.status(500).send('Error del servidor');
        }
};
    exports.crearCategoria = async (peticion, respuesta) =>  {
        try  {
            const nuevaCategoria = await Categoria.create(peticion.body);
            respuesta.status(201).json(nuevaCategoria);
            }  
        catch (error)  {
            console.log(error);
            respuesta.status(500).send(error);
        }
};
exports.actualizarCategoria = async (peticion, respuesta) =>  {
    try  {
            const { id } = peticion.params;
            const categoriaActualizada = await Categoria.update(peticion.body,{
                where : {idcategoria: id}
            });
            if (categoriaActualizada) {
                const categoria = await Categoria.findByPk(id);
                respuesta.json(categoria);
            }else {
                respuesta.status(404).send({mensaje: 'Categoria no encontrada'})
            }
        }  
    catch (error)  {
        console.log(error);
        res.status(500).send('Error');
    }
};

exports.eliminarCategoria = async (peticion, respuesta) =>  {
    try  {
        const { id } = peticion.params;
        const eliminado = await Categoria.destroy({
            where : {idcategoria : id}
        });
        if (eliminado)
            respuesta.status(200).json({mensaje: 'Categoria Eliminada'});
        else
            respuesta.status(404).json({mensaje: 'Categoria no Encontrada'});

        }  
    catch (error)  {
        console.log(error);
        respuesta.status(500).send(error);
    }
};

exports.buscarCategoria = async (peticion, respuesta) =>  {
    try  {
        const { nombre } = peticion.query;
        const categorias = await Categoria.findAll({
            where : {nombre : { [Op.like] : `%${nombre}%`}}
        });
        respuesta.json(categorias);
        
        }  
    catch (error)  {
        console.log(error);
        respuesta.status(500).send(error);
    }
};

