const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const { ObjectId } = mongoose.Types; // Importar ObjectId

// Importa los modelos desde la nueva estructura
const area = require('./app/models/areas');
const atracciones = require('./app/models/atracciones');
const empleados = require('./app/models/empleados');
const visitantes = require('./app/models/visitantes');
const visitas = require('./app/models/visitas');
const espectaculos = require('./app/models/espectaculos');
const restaurantes = require('./app/models/restaurantes');

const dataFolderPath = path.resolve(__dirname, 'data');

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/Portaventura_api')
    .then(() => {
        console.log('Connected to MongoDB');
        return mongoose.connection.dropDatabase();
    })
    .then(() => {
        console.log('Database dropped successfully');
        return importData();
    })
    .catch((err) => {
        console.error('Error:', err);
        process.exit(1);
    });

const importData = async () => {
    try {
        const areasData = fs.readFileSync(`${dataFolderPath}/Areas.js`, 'utf-8');
        await area.create(JSON.parse(areasData).map(data => ({ ...data, _id: new ObjectId(data._id['$oid']) })));

        const atraccionesData = fs.readFileSync(`${dataFolderPath}/Atracciones.js`, 'utf-8');
        await atracciones.create(JSON.parse(atraccionesData).map(data => ({ ...data, _id: new ObjectId(data._id['$oid']) })));

        const empleadosData = fs.readFileSync(`${dataFolderPath}/Empleados.js`, 'utf-8');
        await empleados.create(JSON.parse(empleadosData).map(data => ({ ...data, _id: new ObjectId(data._id['$oid']) })));

        const visitantesData = fs.readFileSync(`${dataFolderPath}/Visitantes.js`, 'utf-8');
        await visitantes.create(JSON.parse(visitantesData).map(data => ({ ...data, _id: new ObjectId(data._id['$oid']) })));

        const visitasData = fs.readFileSync(`${dataFolderPath}/Visitas.js`, 'utf-8');
        await visitas.create(JSON.parse(visitasData).map(data => ({ ...data, _id: new ObjectId(data._id['$oid']) })));

        const espectaculosData = fs.readFileSync(`${dataFolderPath}/Espectaculos.js`, 'utf-8');
        await espectaculos.create(JSON.parse(espectaculosData).map(data => ({ ...data, _id: new ObjectId(data._id['$oid']) })));

        const restaurantesData = fs.readFileSync(`${dataFolderPath}/Restaurantes.js`, 'utf-8');
        await restaurantes.create(JSON.parse(restaurantesData).map(data => ({ ...data, _id: new ObjectId(data._id['$oid']) })));

        console.log('Data imported successfully');
        process.exit();
    } catch (err) {
        console.error('Error importing data:', err);
        process.exit(1);
    }
};
