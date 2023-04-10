const ShoppingCart = require('../models/Cart');
const { validationResult } = require('express-validator')

let cart;

const addToCart = async (req, res) => {

    if (!cart) {
        cart = new ShoppingCart()
    }

    const { brickId, propertyId, price } = req.body; 
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()});
    }

    try {
        
        cart.addItem(brickId, propertyId, price);
        res.status(201).json({
            ok: true,
            msg: 'Brick added successfully',
            data: cart
        });

    }catch(err){
        console.log(err)
        res.status(500).json({
            ok: false,
            msg: 'Something went wrong here...'
        });
    }
};

const removeFromCart = async (req, res) => {

    const { brickId, propertyId } = req.body;

    try {
        
        if(!cart) {
            return res.status(404).json({
                ok: false,
                msg: 'Cart does not exist'
            });
        };

        cart.removeItem(brickId, propertyId)

        res.status(201).json({
            ok: true,
            msg: 'Brick removed successfully',
            data: cart
        });

    } catch(err){
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Something went wrong here...'
        });
    };
};

module.exports = {
    addToCart, 
    removeFromCart
};