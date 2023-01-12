// ES5 Inharitance - наследование
// function Phone(title, price, discount) {
//     this.title = title;
//     this.price = price;
//     this.discount = discount;
// }

// Phone.prototype.getDiscount = function () {
//     let price = (this.price * (100 - this.discount)) / 100;

//     return price;
// };

// Phone.prototype.showThis = function () {
//     console.log(this);
// };

// let apple = new Phone("apple", 1200, 10);
// let samsung = new Phone("samsung", 600, 15);

// console.log(apple);
// console.log(samsung);

// =====================================
// function User(name, salary, overtime) {
//     this.name = name;
//     this.salary = salary;
//     this.overtime = overtime;
// }

// User.prototype.paySalary = function () {
//     return this.salary + this.overtime + 500;
// };

// let sara = new User("Sara", 2500, 100);
// let vova = new User("Vova", 30000, 50);

// console.log(sara);
// console.log(sara instanceof User);

// console.log(sara.paySalary());

// ===============================================
function User(name, lastName) {
    this.name = name;
    this.lastName = lastName;
}

User.prototype.getInfo = function () {
    console.log(this.name, this.lastName);
};
User.prototype.sayHello = function () {
    console.log("Hello", this.name);
};

let sara = new User("Sara", "Connor");
let vova = new User("Vova", "Smith");

// console.log(sara);
// console.log(vova);

// sara.getInfo();
// vova.getInfo();

// ===============================================
// 1. Функциональное наследование
function Customer(name, lastName, membership, isActive) {
    User.apply(this, arguments);
    this.membership = membership;
    this.isActive = isActive;
}

//============================================
// 2. Прототипное наслетование

// 2.1 Передать пртотип
Customer.prototype = Object.create(User.prototype);

// 2.2 Перебити контсруктор (явно вказати)
Customer.prototype.constructor = Customer;

// 2.3 Якшо треба додати нові методи, то додаємо
Customer.prototype.getStatusAndMembership = function () {
    console.log(this.membership, this.isActive);
};

let bob = new Customer("Bob", "Marley", "PRO", true);

// console.log(bob);
bob.getInfo();
bob.sayHello();

bob.getStatusAndMembership();
