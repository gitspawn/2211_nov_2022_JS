// ES-5 Constructors or Class

// ==============================================

function Phone(title, price, discount) {
    this.title = title;
    this.price = price;
    this.discount = discount;

    this.showThis = function () {
        console.log(this);
    };

    this.getDiscount = function () {
        let price = (this.price * (100 - this.discount)) / 100;

        return price;
    };
}

// Instance
// To instantiate
let apple = new Phone("apple", 1200, 10);
let samsung = new Phone("samsung", 600, 15);
let lg = new Phone("LG", 780, 5);
// let lg = new Phone("LG", 780, 5);
// let lg = new Phone("LG", 780, 5);
// let lg = new Phone("LG", 780, 5);
// let lg = new Phone("LG", 780, 5);
// let lg = new Phone("LG", 780, 5);
// let lg = new Phone("LG", 780, 5);
// let lg = new Phone("LG", 780, 5);
// let lg = new Phone("LG", 780, 5);
// let lg = new Phone("LG", 780, 5);
// let lg = new Phone("LG", 780, 5);
// let lg = new Phone("LG", 780, 5);
// let lg = new Phone("LG", 780, 5);

// console.log(apple);
// console.log(samsung);
// apple.showThis();
// samsung.showThis();

// console.log(apple.getDiscount());
// console.log(samsung.getDiscount());

// =====================================
// instanceof

// console.log(apple instanceof Phone);
// console.log(apple instanceof Boolean);
// console.log(apple instanceof Number);

// apple.color = "Red";
// apple.battery = 5000;

// console.log(apple);
// console.log(samsung);

class Phone {
    constructor() {}
}
