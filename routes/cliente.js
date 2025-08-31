import express from "express";
const router = express.Router();
import ClienteController from "../controllers/ClienteController.js";
import auth from "../helpers/auth.js";

router.get('/', auth, ClienteController.index);
router.post('/salvar', auth, ClienteController.salvar);
router.put('/salvar', auth, ClienteController.editar);

export default router;