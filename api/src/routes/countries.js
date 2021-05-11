const { Router } = require('express');
const { Country } = require('../db.js');

const router = Router();

router.get('/', (req, res, next) => {
    return Country.findAll()
        .then(country => res.send(country))
        .catch(error => next(error));
});

router.get('/:idPais', (req, res, next) => {
    const id = req.params.idPais;
    return Country.findByPk(id)
        .then(country => res.send(country))
        .catch(error => next(error));
});

router.get('/', (req, res, next) => {
    res.send('ruta por query');
});

module.exports = router;