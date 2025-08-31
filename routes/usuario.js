import express from 'express';
const router = express.Router();
import UsuarioController from "../controllers/UsuarioController.js";
import auth from "../helpers/auth.js";

router.post('/salvar', UsuarioController.salvar);
router.post('/login', UsuarioController.login);
router.get('/logout', auth, UsuarioController.logout);

export default router;
