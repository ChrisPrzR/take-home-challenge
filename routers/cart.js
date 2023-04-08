const express = require('express');

const { addToCart, removeFromCart } = require('../controllers/cart');

const router = express.Router();

router.post('/add', addToCart);

router.put('/remove', removeFromCart);

module.exports = router;