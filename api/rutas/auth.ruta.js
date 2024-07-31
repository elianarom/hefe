import express from 'express';
import { iniciarsesion } from '../controladores/auth.controlador.js';

const router = express.Router();

router.post('/iniciarsesion', iniciarsesion);

export default router;