const model = require('../models/visitantes');

exports.getData = async (req, res) => {
    try {
        const visitantes = await model.find();
        res.render('visitantes', { visitantes });
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
}