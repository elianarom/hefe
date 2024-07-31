import { errorHandler } from '../extras/error.js';
import Usuario from '../modelos/usuario.modelo.js'
import bcryptjs from 'bcryptjs';

export const registrarse = async (req, res, next) => {
    const { username, email, password } = req.body;

    if(!username || !email || !password || username === '' || email === '' || password === '') {
        next(errorHandler(400, "Todos los campos son requeridos."));
    }

    const passwordHasheada = bcryptjs.hashSync(password, 10);

    const nuevoUsuario = new Usuario({ username, email, password: passwordHasheada });

    try {
        await nuevoUsuario.save();
        res.json("Te registraste con éxito.");
    } catch (error) {
        next(error);
    }
}