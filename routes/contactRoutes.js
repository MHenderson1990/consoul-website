const express = require('express');
const router = express.Router();
const { sendContactMessage } = require('../controllers/contactController');
const { contactRules, validateContact } = require('../middlewares/validateContact');

router.post('/', contactRules, validateContact, sendContactMessage);

module.exports = router;