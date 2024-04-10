const model = require('../models/areas');

exports.getData = async (req, res) => {
    try {
        const areas = await model.find();
        res.render('areas', { areas });
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
}