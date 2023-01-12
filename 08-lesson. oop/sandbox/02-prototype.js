// Прототипы
// Object.create
// Прототипы
// Object.create()

let arr_1 = [10, 20, 330, 40, 50];
let arr_2 = ["vova", "sara", "bob", "mike"];
let arr_3 = [null, false, true, 10, 0, "hello"];

// arr_1.push(1000);
// arr_2.push("john");
// arr_3.push(undefined);

// console.log(arr_1);
// console.log(arr_2);
// console.log(arr_3);

// console.log(arr_1);
// console.log(arr_2);

// console.log(arr_1.toString());
// console.log(arr_3.toString());

// console.log(arr_1);
// console.log(arr_2);
// console.log(arr_1.__proto__);

// ====================================
// let objA = {
//     a: 1,
//     b: 2,
//     met() {},
// };

// console.log(objA);

// let objB = {
//     ...objA,
// };

// console.log(objB);

// ===========================
// object.create;

// let objA = {
//     a: 1,
//     b: 2,
// };

// console.log(objA);
// console.log(objA.toString());

// let objB = Object.create(objA);
// objB.x = 10;
// objB.y = 20;
// console.log(objB);

// console.log(objB.x);
// console.log(objB.y);
// console.log(objB.a);
// console.log(objB.b);

// __proto__
//     __proto__
//         __proto__
//             __proto__
//                 Object

// let str = "Sara";
// console.log(str.__proto__);

// let num = 100;
// console.log(num.__proto__);

// ===========================
// Own property
let objA = {
    title: "Carbonara",
    price: 250,
};

let pizza = Object.create(objA);

pizza.ketchup = "Chili";
pizza.salo = "Yes";

console.log(pizza);
// console.log(pizza.title);

// let res = pizza.hasOwnProperty("ketchup");
// res = pizza.hasOwnProperty("title");

// console.log(res);

for (let item in pizza) {
    console.log(item, pizza[item]);
    // if (pizza.hasOwnProperty(item)) {
    //     console.log(item, pizza[item]);
    // }
}

// ===============================================================

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

// // ❌ Возвращает true для всех свойств
// console.log("name" in dog); // true
// console.log("legs" in dog); // true

// // ✅ Возвращает true только для собственных свойств
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Если это собственное свойство - выполняем тело if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Если это не собственное свойство - ничего не делаем
// }
