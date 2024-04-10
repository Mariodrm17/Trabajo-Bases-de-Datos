const moongose = require('mongoose');
const espectaculosSchema = new moongose.Schema(
    {
        nombre: {
            type: String
        },
        descripcion: {
            type: String
        },
        hora_inicio: {
            type: String,
            validate: {
                validator: function(value) {
                    return /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/.test(value);
                },
                message: props => `${props.value} no es un formato de hora válido (HH:MM:SS)!`
            }
        },
        duracion: {
            type: Number
        },
        ubicacion: {
            type: String
        } 

    }

)
module.exports = moongose.model('espectaculos', espectaculosSchema);