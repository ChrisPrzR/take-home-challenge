const express = require('express');

const { addToCart, removeFromCart } = require('../controllers/cart');
const { isInProgress } = require('../middlewares/cart');

const router = express.Router();

router.post('/add', isInProgress, addToCart);

router.put('/remove', removeFromCart);

module.exports = router;