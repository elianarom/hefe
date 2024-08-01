import express from 'express';
import { registrarse, iniciarsesion, google } from '../controladores/auth.controlador.js';

const router = express.Router();

router.post('/registrarse', registrarse);
router.post('/iniciar-sesion', iniciarsesion);
router.post('/google', google);

export default router;