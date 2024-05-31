const mongoose = require('mongoose');

const restaurantesSchema = new mongoose.Schema({
    nombre: {
        type: String
    },
    tipo_cocina: {
        type: String
    },
    ubicacion: {
        type: String
    },
    horario_apertura: {
        type: String,
        validate: {
            validator: function(value) {
                return /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/.test(value);
            },
            message: props => `${props.value} no es un formato de hora válido (HH:MM:SS)!`
        }
    },
    horario_cierre: {
        type: String,
        validate: {
            validator: function(value) {
                return /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/.test(value);
            },
            message: props => `${props.value} no es un formato de hora válido (HH:MM:SS)!`
        }
    },
    capacidad: {
        type: Number
    },
    continente: {  // Nueva propiedad para representar el continente
        type: String,
        enum: ['Europa', 'América', 'Asia', 'África', 'Oceanía'] // Lista de continentes permitidos
    }
});

module.exports = mongoose.model('restaurantes', restaurantesSchema);
