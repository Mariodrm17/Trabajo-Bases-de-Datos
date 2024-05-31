const model = require('../models/areas');

//Buscar áreas por nombre
exports.searchAreasByName = async (req, res) => {
    try {
        const { q } = req.query;
        const areas = await model.find({ nombre: { $regex: q, $options: 'i' } }).sort({ nombre: 1 });
        res.json({ areas });
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
}

//Eliminar áreas sin ubicación
exports.deleteAreasWithoutLocation = async (req, res) => {
    try {
        await model.deleteMany({ ubicacion: { $exists: false } });
        res.send('Áreas sin ubicación eliminadas correctamente');
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
}

//Obtener todas las áreas ordenadas por nombre
exports.getData = async (req, res) => {
    try {
        const areas = await model.find().sort({ name: 1 });
        res.render('areas', { areas });
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
}
