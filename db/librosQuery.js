import { config } from '../config.js';

/**
 * Carga la lista de libros
 */
const listarTodosLibrosQuery = async () => {
    try {
        const result = await config.query('SELECT * FROM libros');
        return result.rows;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Buscar un libro por su ID (llave primaria)
 */
const listarLibroPorIdQuery = async (id) => {
    try {
        const result = await config.query('SELECT * FROM libros WHERE id = $1 LIMIT 1', [id]);
        return result.rows;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Guardar un nuevo libro
 */
const crearLibroQuery = async (libro) => {
    const { nombre, copias, estante } = libro;
    try {
        const result = await config.query(
            'INSERT INTO libros (nombre, copias, estante) VALUES ($1, $2, $3) RETURNING *',
            [nombre, copias, estante]
        );
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Actualizar un libro por su ID
 */
const actualizarLibroQuery = async (id, libro) => {
    const { nombre, copias, estante } = libro;
    try {
        const result = await config.query(
            'UPDATE libros SET nombre = $1, copias = $2, estante = $3 WHERE id = $4 RETURNING *',
            [nombre, copias, estante, id]
        );
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Eliminar un libro por su ID
 */
const eliminarLibroQuery = async (id) => {
    try {
        const result = await config.query(
            'DELETE FROM libros WHERE id = $1 RETURNING *',
            [id]
        );
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

// Exportar todas las funciones definidas en este archivo
export {
    listarTodosLibrosQuery,
    listarLibroPorIdQuery,
    crearLibroQuery,
    actualizarLibroQuery,
    eliminarLibroQuery   
}