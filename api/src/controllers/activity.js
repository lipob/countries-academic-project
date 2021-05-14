const { Country, Activity } = require('../db.js');
const ModelCrud = require('./index');


class ActivityModel extends ModelCrud {
    constructor(model) {
        super(model);
    };
    createActivity = (req, res, next) => {
        const { newActivity, countriesId } = req.body;
        return this.model.create(newActivity)
            .then(newActivity => {
                newActivity.setCountries(countriesId)
                res.send(newActivity)
            })
            .catch(error => next(error));
    };
    getActivities = (req, res, next) => {
        return this.model.findAll({
                include: Country
            })
            .then(elements => res.send(elements))
            .catch(error => next(error));
    };
};

const activitiesController = new ActivityModel(Activity);

module.exports = activitiesController;