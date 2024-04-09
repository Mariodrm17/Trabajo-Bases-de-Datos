const moongose = require('mongoose');
const espectaculosSchema = new moongose.Schema(
    {
        nombre: {
            type: String
        },
        decripcion: {
            type: String
        },
        hora_inicio: {
            type: Date
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