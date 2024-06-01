const model = require('../models/espectaculos');

exports.getData = async (req, res) => {
    try {
        const espectaculos = await model.find();
        res.render('espectaculos', { espectaculos });
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
};

exports.getEspectaculoById = async (req, res) => {
    try {
        const espectaculo = await model.findById(req.params.id);
        res.render('espectaculo', { espectaculo });
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
};

exports.addEspectaculo = async (req, res) => {
    try {
        const nuevoEspectaculo = new model(req.body);
        await nuevoEspectaculo.save();
        res.redirect('/espectaculos');
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
};

exports.editEspectaculoById = async (req, res) => {
    try {
        const espectaculo = await model.findById(req.params.id);
        res.render('editEspectaculo', { espectaculo });
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
};

exports.updateEspectaculo = async (req, res) => {
    try {
        await model.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/espectaculos');
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
};

exports.deleteEspectaculo = async (req, res) => {
    try {
        await model.findByIdAndDelete(req.params.id);
        res.redirect('/espectaculos');
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
};
