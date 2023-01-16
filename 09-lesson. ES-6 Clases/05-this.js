// this - Контекст вызова
// this - это тот кто вызывает функцию
// Не важно где обьявлена ф-ция, важно кто ее вызывает

// class User {
//     constructor(name, lastName) {
//         this.name = name;
//         this.lastName = lastName;
//     }

//     getInfo() {
//         console.log(this);
//     }
// }

// let sara = new User("Sara", "Connor");
// let vova = new User("Vova", "Smith");

// sara.getInfo();
// vova.getInfo();

// ======================================

// function User(name, lastName) {
//     this.name = name;
//     this.lastName = lastName;
// }

// User.prototype.getInfo = function () {
//     console.log(this);
// };

// let sara = new User("Sara", "Connor");
// let vova = new User("Vova", "Smith");

// sara.getInfo();
// vova.getInfo();

// =======================================

// class Calculator {
//     // constructor() {}

//     static PI = 3.14;

//     static min(a, b) {
//         console.log(this);
//         return a > b ? b : a;
//     }
// }

// Calculator.min();
