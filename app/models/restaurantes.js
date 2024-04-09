const moongose = require('mongoose');
const restaurantesSchema = new moongose.Schema(
    {
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
        }     

    }
)
module.exports = moongose.model('restaurantes', restaurantesSchema);