// ES6 classes
// class Phone {
//     constructor(title, price, discount) {
//         this.title = title;
//         this.price = price;
//         this.discount = discount;
//     }

//     getDiscount() {
//         let price = (this.price * (100 - this.discount)) / 100;
//         return price;
//     }

//     showThis() {
//         console.log(this);
//     }
// }

// let apple = new Phone("apple", 1200, 10);
// let samsung = new Phone("samsung", 600, 15);

// console.log(apple);
// console.log(samsung);

// console.log(apple.title);
// console.log(samsung.price);

// apple.title = "Iphone";

// console.log(apple);

// apple.color = "Gold";

// apple.getColor = () => {
//     console.log(this.color);
// };

// apple.getColor = function () {
//     console.log(this.color);
// };

// Phone.prototype.getColor = function () {
//     console.log(this.color);
// };

// console.log(apple);
// apple.getColor();
// =========================================
// Class public field
class Phone {
    maria = "Frontend";

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

    danylo = "BackEnd";

    // andrii = ["beer", "vodka", "belly"];
    // andrii = { hobby: "sleep" };
    // andrii = () => {
    //     console.log("Andrii function from class");
    // };
}

let samsung = new Phone("samsung", 600, 15);

console.log(samsung);

// console.log(samsung.maria);
// console.log(samsung.danylo);
// console.log(samsung.andrii);
// samsung.andrii();

Phone.prototype.andrii = function () {
    console.log("Andrii function from prototype");
};

samsung.andrii();
