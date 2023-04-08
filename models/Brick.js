class Brick {
    
    constructor(brickId, propertyId, price) {
        this.brickId = brickId;
        this.propertyId = propertyId;
        this.price = price;
    }

    updatePrice(price) {
        this.price = price;
    }

    purchaseInProgress(){}
    // Find if current brick is in a cart
}

module.exports = Brick;