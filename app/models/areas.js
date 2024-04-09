const moongose = require('mongoose');
const areasSchema = new moongose.Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true
        },
        nombre: {
            type: String
        },
        descripcion: {
            type: String
        },
        fecha_apertura: {
            type: Date
        },
        ubicacion: {
            type: String
        },


    }
)
module.exports = moongose.model('areas', areasSchema);