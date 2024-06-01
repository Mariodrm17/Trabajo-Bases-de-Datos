const Atraccion = require('../models/atracciones');

//Obtener todas las atracciones para niños (altura máxima 1.25)
exports.getAttractionsForKids = async (req, res) => {
  try {
    const atracciones = await Atraccion.find({ 
      altura_minima: { $lte: 1.25 }
    });
    res.json({ atracciones });
  } catch (error) {
    res.status(500).send('Hubo un error');
  }
}

//Obtener todas las atracciones ordenadas por capacidad
exports.getData = async (req, res) => {
    try {
        const atracciones = await Atraccion.find().sort({ capacidad: 1 });
        res.render('atracciones', { atracciones });
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
}
