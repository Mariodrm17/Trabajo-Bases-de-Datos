const mongoose = require('mongoose');

const espectaculosSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    hora_inicio: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                return /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/.test(value);
            },
            message: props => `${props.value} no es un formato de hora válido (HH:MM:SS)!`
        }
    },
    duracion: {
        type: Number,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Espectaculo', espectaculosSchema);
