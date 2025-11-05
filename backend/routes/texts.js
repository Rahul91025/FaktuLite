const express = require('express');
const { getTexts, updateText } = require('../controllers/texts');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

router.get('/', getTexts);
router.put('/:id', authenticateToken, updateText);

module.exports = router;
