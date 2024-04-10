const model = require('../models/empleados');

exports.getData = async (req, res) => {
    try {
        const empleados = await model.find();
        res.render('empleados', { empleados });
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
}