const mongoose = require('mongoose');

const empleadosSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    puesto: {
        type: String,
        required: true
    },
    area_trabajo: {
        type: String
    },
    fecha_contratacion: {
        type: Date
    },
    salario: {
        type: Number
    },
    estado: {
        type: String,
        enum: ['Activo', 'Inactivo'],
        default: 'Activo'
    },
    fecha_registro: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('empleados', empleadosSchema);
