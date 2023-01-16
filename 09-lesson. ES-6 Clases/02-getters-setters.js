// getters / setters
class Phone {
    constructor(title, price, discount) {
        this.title = title;
        this.price = price;
        this.discount = discount;
    }

    getDiscount() {
        let price = (this.price * (100 - this.discount)) / 100;
        return price;
    }

    showThis() {
        console.log(this);
    }

    // Getters
    // get brandName() {
    //     return this.title;
    // }

    // //Setter
    // set brandName(newName) {
    //     this.title = newName;
    // }

    getBrand() {
        return this.title;
    }

    setBrand(newName) {
        this.title = newName;
    }
}

let apple = new Phone("apple", 1200, 10);

console.log(apple.getBrand());
apple.setBrand("Samsung");

// apple.brandName;
// console.log(apple.brandName);

// apple.brandName = "iPhone";
console.log(apple);
