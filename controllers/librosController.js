import {
    listarTodosLibrosQuery,
    listarLibroPorIdQuery,
    crearLibroQuery,
    actualizarLibroQuery,
    eliminarLibroQuery
  } from "../db/librosQuery.js";
  
  /**
   * Obtener todos los libros de la base de datos
   */
  const listarTodosLibros = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const libros = await listarTodosLibrosQuery();
      res.json(libros);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener el libro con el ID especificado en la query / url
   * @param {*} req 
   * @param {*} res 
   */
  
  const listarLibroPorId = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const libro = await listarLibroPorIdQuery(req.params.id);
      res.json(libro);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un libro
   */
  const crearLibro = async (req, res) => {
    console.log(req.body)
    try {
        const datosLibro = req.body;
        const resultado = await crearLibroQuery(datosLibro);
        res.json({ mensaje: 'Libro creado con éxito', id: resultado.rows[0].id });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un libro
   */
  const actualizarLibro = async (req, res) => {
    try {
        const id = req.params.id;
        const datosLibro = req.body;
        const resultado = await actualizarLibroQuery(id, datosLibro);
        if (resultado.rowCount > 0) {
            res.json({ mensaje: 'Libro actualizado con éxito', id: id });
        } else {
            res.status(404).json({ mensaje: 'Libro no encontrado' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar un libro
   */
  const eliminarLibro = async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await eliminarLibroQuery(id);
        if (resultado.rowCount > 0) {
            res.json({ mensaje: 'Libro eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'Libro no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el libro', error: error.message });
    }
  };
  
  export {
    listarTodosLibros,
    listarLibroPorId,
    crearLibro,
    actualizarLibro,
    eliminarLibro,
  };