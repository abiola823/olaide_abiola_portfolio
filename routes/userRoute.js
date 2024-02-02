const express = require('express');
const router = express.Router();
const { contactUser } = require('../controller/userController');

router.use(express.static('public'))
router.post('/contact', contactUser );

module.exports = router;