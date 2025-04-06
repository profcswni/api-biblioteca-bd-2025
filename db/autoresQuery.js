import { config } from '../config.js';

/**
 * Carga la lista de autores
 */
const listarTodosAutoresQuery = async () => {
    try {
        const result = await config.query('SELECT * FROM autores');
        return result.rows;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Buscar un autor por su ID (llave primaria)
 */
const listarAutorPorIdQuery = async (id) => {
    try {
        const result = await config.query('SELECT * FROM autores WHERE id = $1 LIMIT 1', [id]);
        return result.rows;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Guardar un nuevo autor
 */
const crearAutorQuery = async (autor) => {
    const { nombres } = autor;
    try {
        const result = await config.query(
            'INSERT INTO autores (nombres) VALUES ($1) RETURNING *',
            [nombres]
        );
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Actualizar un autor por su ID
 */
const actualizarAutorQuery = async (id, autor) => {
    const { nombres } = autor;
    try {
        const result = await config.query(
            'UPDATE autores SET nombres = $1 WHERE id = $2 RETURNING *',
            [nombres, id]
        );
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Eliminar un autor por su ID
 */
const eliminarAutorQuery = async (id) => {
    try {
        const result = await config.query(
            'DELETE FROM autores WHERE id = $1 RETURNING *',
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
    listarTodosAutoresQuery,
    listarAutorPorIdQuery,
    crearAutorQuery,
    actualizarAutorQuery,
    eliminarAutorQuery
}