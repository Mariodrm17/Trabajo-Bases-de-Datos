const model = require('../models/empleados');

exports.getData = async (req, res) => {
    try {
        const empleados = await model.find();
        res.render('empleados', { empleados });
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
}

exports.buscarEmpleadoPorNombre = async (req, res) => {
    const nombre = req.body.nombre;
    try {
        const empleados = await model.find({ nombre: nombre }); // Busca empleados por nombre
        res.render('empleados', { empleados });
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
}
