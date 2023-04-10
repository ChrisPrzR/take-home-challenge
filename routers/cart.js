const express = require('express');

const { addToCart, removeFromCart, processCart } = require('../controllers/cart');
const { isInProgress } = require('../middlewares/cart');

const router = express.Router();

router.post('/add', isInProgress, addToCart);

router.put('/remove', removeFromCart);

router.post('/checkout', processCart )

module.exports = router;