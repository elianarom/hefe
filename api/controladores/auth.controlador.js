import Usuario from '../modelos/usuario.modelo.js'
import bcryptjs from 'bcryptjs';

export const iniciarsesion = async (req, res) => {
    const { username, email, password } = req.body;

    if(!username || !email || !password || username === '' || email === '' || password === '') {
        return res.status(400).json({message: "Todos los campos son requeridos."})
    }

    const passwordHasheada = bcryptjs.hashSync(password, 10);

    const nuevoUsuario = new Usuario({ username, email, password: passwordHasheada });

    try {
        await nuevoUsuario.save();
        res.json("Te registraste con éxito.")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}