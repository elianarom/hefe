import express from 'express';
import mongoose from 'mongoose';
import usuarioRutas from './rutas/usuario.ruta.js';
import authRutas from './rutas/auth.ruta.js';

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/api', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB: '));
db.once('open', () => {
    console.log('Conexión exitosa a MongoDB');
});

app.listen(3000, () => {
    console.log('server corriendo en el puerto 3000');
});

app.use('/api/usuario', usuarioRutas);
app.use('/api/auth', authRutas);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const mensaje = err.mensaje || 'Ocurrió un error en el servidor';
    res.status(statusCode).json({
        success: false,
        statusCode,
        mensaje
    });
});

