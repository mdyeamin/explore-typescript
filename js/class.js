"use strict";
class car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
    getTotalPrice(tax) {
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}
const toyota = new car('toyota', 100000);
const totalPrice = toyota.getTotalPrice(10);
