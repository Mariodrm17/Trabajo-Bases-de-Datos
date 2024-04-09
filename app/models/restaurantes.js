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
            type: Date
        },
        horario_cierre: {
            type: Date
        },
        capacidad: {
            type: Number
        }     

    }
)
module.exports = moongose.model('restaurantes', restaurantesSchema);