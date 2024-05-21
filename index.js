const express  = require ('express');
require('dotenv').config();

const mongoose = require('mongoose');

const app = express();

app.get('/', routes);


app.listen(3000, ()=>{
    console.log('Servidor escuchando en el puerto 3000');
})