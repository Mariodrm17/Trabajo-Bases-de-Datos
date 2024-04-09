const moongose = require('mongoose');
const visitasSchema = new moongose.Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true
        },
        id_visitante: {
            type: Number
        },
        fecha_visita: {
            type: Date
        },
        cantidad_personas: {
            type: Number
        },
        monto_total: {
            type: Number
        }
    }
)
module.exports = moongose.model('visitas', visitasSchema);
