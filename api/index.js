import express from 'express';

const app = express();

app.listen(3000, () => {
    console.log('server corriendo en el puerto 3000');
});