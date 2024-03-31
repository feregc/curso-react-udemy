const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

//crear servidor de express
const app = express();

//Conexion a la base de datos
dbConnection();

//cors
app.use( cors() );

// directorio publico
app.use( express.static( 'public' ) );


//Lectura y parseo del body
app.use( express.json() );


//rutas
app.use( '/api/auth', require('./routes/auth') );
//TODO: CRUD: eventos


//escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto : ${ process.env.PORT }`);
});