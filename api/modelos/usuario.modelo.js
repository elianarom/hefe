import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "El nombre de usuario es obligatorio."],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "El email es obligatorio."],
        unique: [true, "Ya existe este email. Probá con uno diferente."],
        match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "La dirección de email es inválida."]
    },
    password: {
        type: String,
        required: [true, "La contraseña es obligatoria."],
        minlength: [8, "La contraseña debe contener al menos 8 caracteres."],
        maxlength: [256, "La contraseña supera los 256 caracteres, probá con una diferente."]
    },
    fotoPerfil: {
        type: String,
        default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffinwise.edu.vn%2Ffotos-de-p-1693635780107037%2F&psig=AOvVaw2okLPReZAtBybBfA6l8N0K&ust=1722608985623000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCID4vPCA1IcDFQAAAAAdAAAAABAJ'
    },
}, {timestamps: true});

const Usuario = mongoose.model('Usuario', usuarioSchema);
export default Usuario;