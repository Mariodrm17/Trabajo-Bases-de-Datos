const model = require('../models/restaurantes');

exports.getData = async (req, res) => {
    try {
        const aforo = parseInt(req.query.aforo, 10);

        if (!isNaN(aforo)) {
            const restaurantes = await model.find({ capacidad: { $gte: aforo } });
            if (restaurantes.length > 0) {
                res.render('restaurantes', { restaurantes });
            } else {
                res.render('restaurantes', { error: 'No se encontraron restaurantes con el aforo especificado.' });
            }
        } else {
            const restaurantes = await model.find();
            res.render('restaurantes', { restaurantes });
        }
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
};
