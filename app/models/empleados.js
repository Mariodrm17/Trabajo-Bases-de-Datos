const mongoose = require('mongoose');

const empleadosSchema = new mongoose.Schema({
    
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
        type: Date,
        get: function(value) {
            return value.toISOString().split('T')[0];
        }

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
        get: function(value) {
            return value.toISOString().split('T')[0]; 
        }
    }
});

module.exports = mongoose.model('empleados', empleadosSchema);
