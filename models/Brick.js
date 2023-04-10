class Brick {
    
    constructor(brickId, propertyId, price) {
        this.brickId = brickId;
        this.propertyId = propertyId;
        this.price = price;
        this.inProgress = false;
    }

    updatePrice(price) {
        this.price = price;
    }

    updateInProgress() {
        this.inProgress = !this.inProgress
    }
}

module.exports = Brick;