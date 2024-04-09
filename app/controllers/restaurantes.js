const model = require('../models/restaurantes');

exports.getData = async (req, res) => {
    try {
        const restaurantes = await model.find();
        res.render('restaurantes', { restaurantes });
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
}