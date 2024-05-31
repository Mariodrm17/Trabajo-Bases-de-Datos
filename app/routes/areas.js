const express = require('express');
const controller = require('../controllers/areas');
const router = express.Router();

const path = 'areas';

router.get(`/${path}`, controller.getData);
router.post(`/${path}/deleteWithoutLocation`, controller.deleteAreasWithoutLocation);
router.get(`/${path}/search`, controller.searchAreasByName);

module.exports = router;
