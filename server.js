const express = require('express');
const initDB = require('./config/db'); //conexion segura de mongoDB
const bodyParser = require('body-parser');
const path = require('path');

//instanciar express
const app = express();

//seleccionar puerto
const port = 3001;

//habilitar HTML
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//Carpeta de visitas
app.set('views', path.join(__dirname, './app/views'));

const homeRouters = require('./app/routes/home');
const areasRouters = require('./app/routes/areas');
const atraccionesRouters = require('./app/routes/atracciones');
const empleadosRouters = require('./app/routes/empleados');
const visitantesRouters = require('./app/routes/visitantes');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(homeRouters);
app.use(areasRouters);
app.use(atraccionesRouters);
app.use(empleadosRouters);
app.use(visitantesRouters);


app.listen(port, () => {
    console.log(`La aplicaccion esta en linea en el puerto  ${port}`);
})

initDB(); //inicializar la base de datos