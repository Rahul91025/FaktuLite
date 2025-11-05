const express = require('express');
const { getPricelist, addProduct, updateProduct } = require('../controllers/pricelist');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

router.get('/', authenticateToken, getPricelist);
router.post('/', authenticateToken, addProduct);
router.put('/:id', authenticateToken, updateProduct);

module.exports = router;
