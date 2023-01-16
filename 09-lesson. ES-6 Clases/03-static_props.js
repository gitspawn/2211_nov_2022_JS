// Static
// min - static method
// console.log(Date.now());

// let res = Math.min(10, 5, 100, 500);

// console.log(res);

// console.log(new Math.PI());
// console.log(new Date.now());

// =================================
// Calculator

class Calculator {
    // constructor() {}

    static PI = 3.14;

    static min(a, b) {
        // if (a > b) {
        //     return b
        // } else {
        //     return a
        // }

        return a > b ? b : a;
    }

    showThis() {
        console.log("Method show this");
    }
}

// console.log(Calculator.PI);
// console.log(Calculator.min(10, 5));
console.log(Calculator.showThis()); // error

// const calc = new Calculator().showThis();
// const calc = new Calculator();
// calc.showThis();

// console.log(calc);
