import {
    listarTodosAutoresQuery,
    listarAutorPorIdQuery,
    crearAutorQuery,
    actualizarAutorQuery,
    eliminarAutorQuery
} from "../db/autoresQuery.js";

/**
 * Obtener todos los Autores de la base de datos
 */
const listarTodosAutores = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
        //  Ejecutar la consulta en la base de datos
        const autores = await listarTodosAutoresQuery();
        res.json(autores);
    } catch (error) {
        res.status(500).send(error);
    }
};

/**
 * Obtener el Autor con el ID especificado en la query / url
 * @param {*} req 
 * @param {*} res 
 */

const listarAutorPorId = async (req, res) => {
    try {
        //  Ejecutar la consulta en la base de datos
        const autor = await listarAutorPorIdQuery(req.params.id);
        res.json(autor);
    } catch (error) {
        res.status(500).send(error);
    }
};

/**
 * Crear un Autor
 */
const crearAutor = async (req, res) => {
    console.log(req.body)
    try {
        const datosAutor = req.body;
        const resultado = await crearAutorQuery(datosAutor);
        res.json({ mensaje: 'Autor creado con éxito', id: resultado.rows[0].id });
    } catch (error) {
        res.status(500).send(error);
    }
};

/**
 * Actualizar los datos de un Autor
 */
const actualizarAutor = async (req, res) => {
    try {
        const id = req.params.id;
        const datosAutor = req.body;
        const resultado = await actualizarAutorQuery(id, datosAutor);
        if (resultado.rowCount > 0) {
            res.json({ mensaje: 'Autor actualizado con éxito', id: id });
        } else {
            res.status(404).json({ mensaje: 'Autor no encontrado' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

/**
 * Eliminar un Autor
 */
const eliminarAutor = async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await eliminarAutorQuery(id);
        if (resultado.rowCount > 0) {
            res.json({ mensaje: 'Autor eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'Autor no encontrado' });
        }
    } catch (error) {
        //
        res.status(500).json({ mensaje: 'Error al eliminar el Autor', error: error.message });
    }
};

export {
    listarTodosAutores,
    listarAutorPorId,
    crearAutor,
    actualizarAutor,
    eliminarAutor,
};