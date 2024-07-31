import express from 'express';
import { registrarse } from '../controladores/auth.controlador.js';

const router = express.Router();

router.post('/registrarse', registrarse);

export default router;