import express from 'express';
import { registrarse, iniciarsesion } from '../controladores/auth.controlador.js';

const router = express.Router();

router.post('/registrarse', registrarse);
router.post('/iniciar-sesion', iniciarsesion);

export default router;