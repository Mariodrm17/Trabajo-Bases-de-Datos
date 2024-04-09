const moongose = require('mongoose');
const areasSchema = new moongose.Schema(
    {
        
        nombre: {
            type: String
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
        ubicacion: {
            type: String
        },


    }
)
module.exports = moongose.model('areas', areasSchema);