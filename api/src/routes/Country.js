const { Router } = require('express');
const { allCountry, CountryById } = require('../Controllers/Country')
const router= Router();


router.get('/', allCountry)  
router.get('/:id', CountryById)  

module.exports = router;