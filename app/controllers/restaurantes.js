const model = require('../models/restaurantes');

exports.getData = async (req, res) => {
    try {
        const { aforo, continente } = req.query;

        let query = {};

        if (aforo) {
            query.capacidad = { $gte: parseInt(aforo, 10) };
        }
        
        if (continente) {
            query.continente = continente;
        }

        const restaurantes = await model.find(query);

        if (restaurantes.length > 0) {
            res.render('restaurantes', { restaurantes });
        } else {
            res.render('restaurantes', { error: 'No se encontraron restaurantes que coincidan con los criterios de búsqueda.' });
        }
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
};
