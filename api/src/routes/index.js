const { Router } = require('express')
const countryRoute= require('./Country')
const activityRoute= require('./Activity')

const router = Router();

router.use('/countries', countryRoute);
router.use('/activity', activityRoute);

module.exports = router;