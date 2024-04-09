const moongose = require('mongoose');
const visitantesSchema = new moongose.Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true
        },
        nombre: {
            type: String
        },
        apellido: {
            type: String
        },
        fecha_nacimiento: {
            type: Date
        },
        genero: {
            type: String
        },
        nacionalidad: {
            type: String
        },
        tipo_documento: {
            type: String
        },
        numero_documento: {
            type: Number
        },
        fecha_registro: {
            type: Date
        }    

    }
)
module.exports = moongose.model('visitantes', visitantesSchema);