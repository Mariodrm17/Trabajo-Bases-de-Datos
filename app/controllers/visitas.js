const model = require('../models/visitas');

exports.getData = async (req, res) => {
    try {
        const visitas = await model.find();
        // res.send(atracciones);
        res.render('visitas', { visitas });
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
}