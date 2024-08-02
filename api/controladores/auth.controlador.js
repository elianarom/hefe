import { errorHandler } from '../extras/error.js';
import Usuario from '../modelos/usuario.modelo.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createAccessToken } from '../jwt/jwt.js';
import { TOKEN_SECRET } from "../config.js"

const salt = 10;
const claveSecreta = 'app';

export const registrarse = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        next(errorHandler(400, "Todos los campos son obligatorios."));
    }

    const passwordHash = bcrypt.hashSync(password, 10)

    const nuevoUsuario = new Usuario({
        username,
        email,
        password: passwordHash,
    });

    try {
        await nuevoUsuario.save();
        res.json({ message: "Te registraste con éxito."})
    } catch (error) {
        next(error);
    }
}

export const iniciarsesion = async (req, res, next) => {
    const { email, password } = req.body;

    if(!email || !password || email === '' || password === '') {
        next(errorHandler(400, "Todos los campos son obligatorios."));
    }

    try {
        const usuarioValido = await Usuario.findOne({ email });
        if(!usuarioValido) {
            return next(errorHandler(400, "Credenciales incorrectas."));
        }
        const passwordValida = await bcrypt.compare(password, usuarioValido.password);
        if(!passwordValida) {
            return next(errorHandler(400, "Credenciales incorrectas."));
        }
        const token = await createAccessToken({id: usuarioValido._id})
        
        const { password: pass, ...rest } = usuarioValido._doc;

        res.cookie('token', token)
                res.json(rest);
    } catch (error) {
        next(error)
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