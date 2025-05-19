const express = require('express');
const morganMiddleware = require('../logger/morganMiddleware');

const app = express();
app.use(morganMiddleware);
//ruta simple
app.get('/', (req, res) => {
    res.send('prueba de log HTTP con Express y Morgan');
});

app.listen(4000, () => {
    console.log('Servidor de prueba corriendo en el puerto 4000');
});