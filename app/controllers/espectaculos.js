const model = require('../models/espectaculos');

exports.getData = async (req, res) => {
    try {
        const espectaculos = await model.find();
        res.render('espectaculos', { espectaculos });
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
}