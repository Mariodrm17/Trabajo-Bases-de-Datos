const moongose = require('mongoose');
const atraccionesSchema = new moongose.Schema(
    {
        
        nombre: {
            type: String
        },
        tipo: {
            type: String
        },
        altura_minima: {
            type: Number
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
        tiempo_espera_promedio: {
            type: Number
        },
        ubicacion: {
            type: String
        },
        capacidad: {
            type: Number
        },
        estado: {
            type: String
        }

    }
)
module.exports = moongose.model('atracciones', atraccionesSchema);
