const mongoose = require('mongoose');

const areasSchema = new mongoose.Schema({
    nombre: {
        type: String
    },
    descripcion: {
        type: String
    },
    fecha_apertura: {
        type: Date,
        get: function(value) {
            return value.toISOString().split('T')[0];
        }
    },
    ubicacion: {
        type: String
    },
    tieneUbicacion: {
        type: Boolean,
        default: false // Por defecto, el área no tiene ubicación
    }
});

module.exports = mongoose.model('areas', areasSchema);
