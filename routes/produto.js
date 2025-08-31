import express from "express";
const router = express.Router();
import auth from '../helpers/auth.js';

import ProdutoController from "../controllers/ProdutoController.js";

router.get('/', ProdutoController.index);
router.get('/buscar/:id', ProdutoController.buscar);
router.post('/salvar', auth, ProdutoController.salvar);
router.put('/salvar', auth, ProdutoController.editar);
router.delete('/excluir/:id', auth, ProdutoController.excluir);

export default router;