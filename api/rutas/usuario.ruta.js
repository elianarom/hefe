import express from 'express';
import { cerrarsesion } from '../controladores/usuario.controlador.js';

const router = express.Router();

router.post('/cerrar-sesion', cerrarsesion)

export default router