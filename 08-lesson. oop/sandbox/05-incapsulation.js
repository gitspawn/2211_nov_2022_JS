// Incapsulation
// Object.seal(objA);
// Object.freeze(ObjB);

// window.prototype.alert = null;
// alert("Hello");

// Array.prototype.push = null;
// let arr = [10, 20, 30, 40];
// arr.push(100);
// console.log(arr);

//  ============================================
// function greetUser() {
//     console.log("Hello Andrii");
// }

// Function.prototype.helloIhor = function () {
//     console.log("Hello Ihor fom greetUser");
// };

// greetUser();

// greetUser.helloIhor();

// alert.helloIhor();

// ============================================
// Object.seal(objA);
// Object.freeze(ObjB);

// let objA = {
//     title: "Carbonara",
//     price: 250,
//     info() {
//         console.log(this);
//     },
// };

// objA.size = "Large";
// objA.weight = 1200;

// objA.size = "Small";
// objA.price = 150;

// objA.color = "Black";
// objA.box = "Yes";

// ======================================================
// Міняти існуючі але не моджемо додвати нові
// Object.seal(objA);

// objA.size = "Large";
// objA.weight = 1200;
// objA.price = 150;

// console.log(objA);

// =====================================================
// Повна 'заморозка'
// Object.freeze(objA);

// objA.size = "Large";
// objA.weight = 1200;
// objA.price = 150;
// objA.title = "Margarita";

// console.log(objA);
