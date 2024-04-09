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
            type: Date,
            get: function(value) {
                return value.toISOString().split('T')[0]; // Convertir a formato ISO sin la parte de la hora
            }
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
