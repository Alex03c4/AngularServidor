const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");
// Creamos el servidor
const app = express();


// Conectamos a la BD
conectarDB();
app.use(cors())
// Convertir body a objeto JS
app.use(express.json()); // recibir dato con content-type app/json
//app.use(express.urlencoded({extended:true}));  // form-urlencoded

app.use('/api/productos', require('./routes/producto'));

app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})