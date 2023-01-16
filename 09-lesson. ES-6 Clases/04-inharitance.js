// Inharitance ES6
class User {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    getInfo() {
        console.log("Method from parent", this.name, this.lastName);
    }

    sayHello() {
        console.log("Hello", this.name);
    }
}

let sara = new User("Sara", "Connor");
let vova = new User("Vova", "Smith");

// ==============================================

// class Customer extends User {
//     constructor(name, lastName, membership) {
//         super(...arguments);

//         this.membership = membership;
//     }
// }

// let bob = new Customer("Bob", "Marley", "PRO");

// console.log(bob);

// ============================================

// class Salo {}

class Customer extends User {
    constructor(membership) {
        super(...arguments);
        this.membership = membership;
    }

    getInfo() {
        console.log("getInfo from Customer", this.name);
    }

    getData() {
        // this.getInfo();
        super.getInfo(); // parent method
    }
}

let bob = new Customer("Bob", "Marley", "PRO");
bob.getData();

// bob.getInfo();
// bob.sayHello();

// console.log(bob);
