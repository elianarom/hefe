import { errorHandler } from '../extras/error.js';
import Usuario from '../modelos/usuario.modelo.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createAccessToken } from '../jwt/jwt.js';

export const registrarse = async (req, res, next) => {
    const { username, email, password } = req.body;

    if(!username || !email || !password || username === '' || email === '' || password === '') {
        next(errorHandler(400, "Todos los campos son requeridos."));
    }

    const passwordHasheada = await bcrypt.hash(password, 10);

    const nuevoUsuario = new Usuario({ username, email, password: passwordHasheada });

    try {
        await nuevoUsuario.save();
        res.json("Te registraste con éxito.");
    } catch (error) {
        next(error);
    }
}

export const iniciarsesion = async (req, res, next) => {
    const { email, password } = req.body;

    if( !email || !password || email === '' || password === '') {
        next(errorHandler(400, "Todos los campos son requeridos."));
    }

    try {
        const usuarioValido = await Usuario.findOne({ email });
        if(!usuarioValido) {
            return next(errorHandler(404, "Usuario no encontrado."));
        }
        
        const coincide = await bcrypt.compare(password, usuarioValido.password);
        if(!coincide) {
            return next(errorHandler(400, "Contraseña incorrecta."));
        }

        const token = await createAccessToken({id: usuarioValido._id});
        res.cookie('token', token)
        res.json({
            id: usuarioValido._id,
            email: usuarioValido.email,
        });
    } catch (error) {
        next(error);
    }
}

export const google = async (req, res, next) => {
    const { email, name, googlePhotoUrl } = req.body;
    try {
        const usuario = await Usuario.findOne({ email })
        if(usuario) {
            const token = await createAccessToken({id: usuario._id});
            const {password, ...rest} = usuario._doc;
            res.cookie('token', token)
            res.json(rest);
        } else {
            const generarPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashearPassword = await bcrypt.hash(generarPassword, 10);

            const nuevoUsuario = new Usuario({
                username: name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4),
                email,
                password: hashearPassword,
                fotoPerfil: googlePhotoUrl,
            });
            try {
                await nuevoUsuario.save();
                const token = await createAccessToken({id: nuevoUsuario._id});
                const {password, ...rest} = nuevoUsuario._doc;
                res.cookie('token', token)
                res.json(rest);
            } catch (error) {
                next(error);
            }
        }
    } catch (error) {
        next(error)
    }
}