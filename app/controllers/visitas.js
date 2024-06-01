const model = require('../models/visitas');

exports.getData = async (req, res) => {
    try {
        const visitas = await model.find();
        res.render('visitas', { visitas });
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
};

exports.showAddForm = (req, res) => {
    res.render('agregar_visita');
};

exports.addVisit = async (req, res) => {
    try {
        const { id, fecha_visita, cantidad_personas, monto_total } = req.body;
        const nuevaVisita = new model({ id, fecha_visita, cantidad_personas, monto_total });
        await nuevaVisita.save();
        res.redirect('/visitas');
    } catch (error) {
        res.status(500).send('Hubo un error al agregar la visita');
    }
};
