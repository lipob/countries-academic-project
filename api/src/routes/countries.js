const { Router } = require('express');
const { Country } = require('../db.js');
const countriesController = require('../controllers/countries');

const router = Router();

router.get('/', countriesController.getCountries);
router.post('/', countriesController.add);
router.get('/:id', countriesController.getCountriesById);

// router.get('/', (req, res, next) => {
//     res.send('ruta por query');
// });

module.exports = router;