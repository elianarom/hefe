import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb://localhost:27017/api', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB: '));
db.once('open', () => {
    console.log('Conexión exitosa a MongoDB');
});

app.listen(3000, () => {
    console.log('server corriendo en el puerto 3000');
});