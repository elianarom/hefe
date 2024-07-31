import express from 'express';
import { test } from '../controladores/usuario.controlador.js';

const router = express.Router();

router.get('/test', test );

export default router