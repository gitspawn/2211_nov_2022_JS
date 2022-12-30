// Hoisting - поднятие переменной
// 1. fnA
// 2. fnA()

// 1. fnB()
// 2.  fnB();

// function fnA() {
//     console.log(`From FnA`);
// }

// fnA();
// console.log("Hello ");

// ==================================

// function fnA() {
//     console.log("Start A");
//     console.log(`From FnA`);

//     function fnB() {
//         console.log("From FnB");
//     }

//     fnB();
//     console.log("End A");
// }

// fnA();

// ==========================================

// function fnA() {
//     console.log(`From FnA`);
// }

// function fnB() {
//     console.log("From FnB");
// }

// fnB();

// fnA();
