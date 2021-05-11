const { Router } = require('express');
const { Activity } = require('../db.js');

const router = Router();

router.get('/', (req, res, next) => {
    return res.send('i am activity route');
})

router.post('/', (req, res, next) => {
    const newActivity = req.body;
    return Activity.create(newActivity)
        .then(newActivity => res.send(newActivity))
        .catch(error => next(error));
});

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    const activity = req.body;
    return Activity.update(activity, {
        where: {
            id,
        }
    })
    .then(updatedActivity => res.send(updatedActivity))
    .catch(error => next(error));
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    return Activity.destroy({
        where: {
            id,
        }
    })
    .then(() => res.sendStatus(200))
    .catch(error => next(error));
});

module.exports = router;