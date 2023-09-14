class Product {
    constructor(name, price, amount) {
        this.name = name
        this.price = price
        this.amount = amount
    }
    addProduct(quantity) {
        this.amount = this.amount + quantity
    }
}

class Customer {
    constructor(name, quantityOfProduct) {
        this.name = name
        this.quantityOfProduct = quantityOfProduct
    }
}

function buyProduct(product, quantity) {
    if (quantity > product.amount) {
        return console.log("out of stocks")
    }
    else {
        product.amount = product.amount - quantityOfProduct
        this.quantityOfProduct = this.quantityOfProduct +this.quantity
        console.log("Buy successfull")
    }
}
const shirt = new Product("Ao Polo", 10000, 10)
shirt.addProduct(10);
console.log(shirt.amount)

