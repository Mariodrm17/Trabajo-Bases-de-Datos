const model = require('../models/visitantes');

// Obtener todos los visitantes
exports.getData = async (req, res) => {
    try {
        const visitantes = await model.find();
        res.render('visitantes', { visitantes });
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
};

// Obtener un visitante por ID
exports.getVisitanteById = async (req, res) => {
    try {
        const visitante = await model.findById(req.params.id);
        if (!visitante) {
            return res.status(404).send('Visitante no encontrado');
        }
        res.render('visitante', { visitante });
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
};

// Crear un nuevo visitante
exports.createVisitante = async (req, res) => {
    try {
        const nuevoVisitante = new model(req.body);
        await nuevoVisitante.save();
        res.redirect('/visitantes');
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
};

// Actualizar un visitante
exports.updateVisitante = async (req, res) => {
    try {
        const visitante = await model.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!visitante) {
            return res.status(404).send('Visitante no encontrado');
        }
        res.redirect('/visitantes');
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
};

// Eliminar un visitante
exports.deleteVisitante = async (req, res) => {
    try {
        const visitante = await model.findByIdAndDelete(req.params.id);
        if (!visitante) {
            return res.status(404).send('Visitante no encontrado');
        }
        res.redirect('/visitantes');
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
};
exports.editVisitanteById = async (req, res) => {
    try {
        const visitante = await model.findById(req.params.id);
        if (!visitante) {
            return res.status(404).send('Visitante no encontrado');
        }
        res.render('editVisitante', { visitante });
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
};