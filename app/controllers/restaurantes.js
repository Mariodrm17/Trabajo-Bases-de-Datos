const model = require('../models/restaurantes');

exports.getData = async (req, res) => {
    try {
        const aforo = req.query.aforo;
        let restaurantes;
        if (aforo) {
            restaurantes = await model.find({ capacidad: { $gte: aforo } });
        } else {
            restaurantes = await model.find();
        }
        res.render('restaurantes', { restaurantes });
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
};