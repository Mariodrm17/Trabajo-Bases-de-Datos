const model = require('../models/atracciones');

exports.getData = async (req, res) => {
    try {
        const atracciones = await model.find();
        res.render('atracciones', { atracciones });
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
}