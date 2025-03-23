import { Router } from 'express';

import {
    listarTodosLibros,
    listarLibroPorId,
    crearLibro,
    actualizarLibro,
    eliminarLibro
} from '../controllers/librosController.js';

const libroRouter = Router();

libroRouter.get('/', listarTodosLibros);
libroRouter.get('/:id', listarLibroPorId);

libroRouter.post('/', crearLibro);
libroRouter.put('/:id', actualizarLibro);
libroRouter.delete('/:id', eliminarLibro);

export default libroRouter;