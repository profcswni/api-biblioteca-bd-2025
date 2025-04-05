import { Router } from 'express';

import {
    listarTodosAutores,
    listarAutorPorId,
    crearAutor,
    actualizarAutor,
    eliminarAutor
} from '../controllers/autoresController.js';

const autorRouter = Router();

autorRouter.get('/', listarTodosAutores);
autorRouter.get('/:id', listarAutorPorId);

autorRouter.post('/', crearAutor);
autorRouter.put('/:id', actualizarAutor);
autorRouter.delete('/:id', eliminarAutor);

export default autorRouter;