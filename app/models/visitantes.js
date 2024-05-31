const mongoose = require('mongoose');

const visitantesSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    fecha_nacimiento: {
        type: Date,
        required: true,
        get: function(value) {
            return value.toISOString().split('T')[0];
        }
    },
    genero: {
        type: String,
        required: true
    },
    nacionalidad: {
        type: String,
        required: true
    },
    tipo_documento: {
        type: String,
        required: true
    },
    numero_documento: {
        type: String,
        required: true
    },
    fecha_registro: {
        type: Date,
        required: true,
        get: function(value) {
            return value.toISOString().split('T')[0];
        }
    }
});

module.exports = mongoose.model('Visitantes', visitantesSchema);
