const { Country, Activity } = require('../db.js');
const ModelCrud = require('./index');
const { Op } = require('sequelize');

class CountryModel extends ModelCrud {
    constructor(model) {
        super(model);
    };
    getCountries = (req, res, next) => {
        const name = req.query.name;
        if(!name) {
            return this.model.findAll({
                    include: Activity
                })
                .then(elements => res.send(elements))
                .catch(error => next(error));
        }
        if(name) {
            return this.model.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                },
                include: Activity
            })
            .then(element => res.send(element))
            .catch(error => next(error));                                }
    };
    getCountriesById = (req, res, next) => {
        const id = req.params.id;
        return this.model.findByPk(id, {
                include: Activity
            })
            .then(element => res.send(element))
            .catch(error => next(error));
    };
}

const countriesController = new CountryModel(Country);

module.exports = countriesController;