const express  = require ('express');

const {dbConnection}=require('./config/config.js')

const app = express();

const router=require('./routes/routes.js');

app.use(express.json());

app.use('/', router);

dbConnection();

app.listen(3000, ()=>{
    console.log('Servidor escuchando en el puerto 3000');
})