const { Router } = require('express');
const { getActivity,postActivity } = require('../Controllers/Activity')
const router= Router();


router.post('/', postActivity)
router.get('/', getActivity) 

module.exports = router;