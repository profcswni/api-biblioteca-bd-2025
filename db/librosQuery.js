import {config} from '../config.js';

/**
 * Carga la lista de libros
 */
const listarTodosLibrosQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM libros', (err, filas) => {
            // Si genera error, mostramos en la consola que es lo que falla
            if (err) {
                console.log(err);
                reject(err);
            } else {
                // Si no hay error, devolvemos los datos de la tabla 
                resolve(filas);
            }
        });
    });
};

/**
 * Buscar un libro por su ID (llave primaria)
 */
const listarLibroPorIdQuery = (id) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM libros WHERE id = ? LIMIT 1', [id], (err, filas) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(filas);
            }
        });
    });
};


/**
 * Guardar un nuevo libro
 */
const crearLibroQuery = async (libro) => {
    const { nombre, copias, estante } = libro;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO libros (nombre, copias, estante) VALUES (?, ?, ?)';
        config.query(sql, [nombre, copias, estante], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

/**
 * Actualizar un libro por su ID
 */
const actualizarLibroQuery = (id, libro) => {
    const { nombre, copias, estante } = libro;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE libros SET nombre = ?, copias = ?, estante = ? WHERE id = ?';
        config.query(sql, [nombre, copias, estante, id], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

/**
 * Eliminar un libro por su ID
 */
const eliminarLibroQuery = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM libros WHERE id = ?';
        config.query(sql, [id], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

// Exportar todas las funciones definidas en este archivo
export {
    listarTodosLibrosQuery,
    listarLibroPorIdQuery,
    crearLibroQuery,
    actualizarLibroQuery,
    eliminarLibroQuery   
}