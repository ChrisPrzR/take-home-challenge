const Brick = require("./Brick");

class ShoppingCart {
	constructor() {
		this.items = [];
	}

	addItem(brickId, propertyId, price) {
		const brick = new Brick(brickId, propertyId, price);
		brick.updateInProgress();
		this.items.push(brick);
		this.#sortItems();
		return this.items;
	};

	removeItem(id, propertyId) {
		for (const item in this.items){
			if (this.items[item].brickId === id && this.items[item].propertyId === propertyId){
				item.updateInProgress()
				this.items.splice(item, 1);
			}
		};
		this.#sortItems();
		return this.items;
	}

	getTotalPrice() {
		let totalPrice = 0;
		for (const item of this.items) {
			totalPrice += item.price;
		}
		return totalPrice;
	};

	checkout() {
		const totalPrice = this.getTotalPrice();
		console.log(`Checkout completed. Total price: ${totalPrice}`);
	};

	#sortItems() {
		this.items.sort((a, b) => a.propertyId - b.propertyId);
	};
}

module.exports = ShoppingCart;