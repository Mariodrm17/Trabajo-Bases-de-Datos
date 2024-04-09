const moongose = require('mongoose');
const visitantesSchema = new moongose.Schema(
    {
        
        nombre: {
            type: String
        },
        apellido: {
            type: String
        },
        fecha_nacimiento: {
            type: Date,
            get: function(value) {
                return value.toISOString().split('T')[0];
            }
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
            type: String
        },
        fecha_registro: {
            type: Date,
            get: function(value) {
                return value.toISOString().split('T')[0]; 
            }
        }    

    }
)
module.exports = moongose.model('visitantes', visitantesSchema);