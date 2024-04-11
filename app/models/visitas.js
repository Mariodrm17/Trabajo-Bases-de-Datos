const moongose = require('mongoose');
const visitasSchema = new moongose.Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true
        },
        
        fecha_visita: {
            type: Date,
            get: function(value) {
                return value.toISOString().split('T')[0];
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
