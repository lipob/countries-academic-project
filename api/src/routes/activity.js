const { Router } = require('express');
const { Activity } = require('../db.js');
const activitiesController = require('../controllers/activity');

const router = Router();

router.get('/', activitiesController.getActivities);
router.get('/:id', activitiesController.getById);
router.post('/', activitiesController.createActivity);
router.put('/:id', activitiesController.update);
router.delete('/:id', activitiesController.delete);

module.exports = router;