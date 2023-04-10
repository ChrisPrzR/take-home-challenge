const ShoppingCart = require('../models/Cart');

let cart;

const addToCart = async (req, res) => {

    if (!cart) {
        cart = new ShoppingCart()
    }

    const { brickId, propertyId, price } = req.body; 

    try {
        
        cart.addItem(brickId, propertyId, price);
        res.status(201).json({
            ok: true,
            msg: 'Brick added successfully',
            data: cart.items
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

        const [isInCart] = cart.removeItem(brickId, propertyId);

        if (!isInCart) {
            return res.status(401).json({
                ok: false,
                msg: 'Item not in cart'
            });
        }

        res.status(200).json({
            ok: true,
            msg: 'Brick removed successfully',
            data: cart.items
        });

    } catch(err){
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Something went wrong here...'
        });
    };
};

const processCart = (req, res) => {

    const { terms, details } = req.body;

    try {
        
        if(!terms || !details) {
            return res.status(400).json({
                ok: false,
                msg: 'Please accept our Terms and conditions'
            });
        };

        cart.processCart()

        res.status(200).json({
            ok: true,
            msg: 'Congratulations! Purchase successful! ',
            data: cart
        });

    } catch(err){
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Something went wrong here...'
        });
    };


}

module.exports = {
    addToCart, 
    removeFromCart,
    processCart
};