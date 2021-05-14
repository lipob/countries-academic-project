const { Op } = require("sequelize");

class ModelCrud {
    constructor(model) {
        this.model = model;
    };
    getAll = (req, res, next) => {
        return this.model.findAll()
            .then(element => res.send(element))
            .catch(error => next(error));

    };
    getById = (req, res, next) => {
        const id = req.params.id;
        return this.model.findByPk(id)
            .then(element => res.send(element))
            .catch(error => next(error));
    };
    add = (req, res, next) => {
        const newActivity = req.body;
        return this.model.create(newActivity)
            .then(newActivity => res.send(newActivity))
            .catch(error => next(error));
    };
    update = (req, res, next) => {
        const id = req.params.id;
        const activity = req.body;
        return this.model.update(activity, {
            where: {
                id,
            }
        })
        .then(updatedActivity => res.send(updatedActivity))
        .catch(error => next(error));
    };
    delete = (req, res, next) => {
        const id = req.params.id;
        return this.model.destroy({
            where: {
                id,
            }
        })
        .then(() => res.sendStatus(200))
        .catch(error => next(error));
    };
};

module.exports = ModelCrud;