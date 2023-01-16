// Завдання 1
// Отримати масив імен всіх користувачів (поле name).

import users from "./users.js";

// {
// age: 37
// balance: 2811
// email: "moorehensley@indexia.com"
// eyeColor: "blue"
// friends: ['Sharron Pace']
// gender: "male"
// id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081"
// isActive: false
// name: "Moore Hensley"
// skills: (2) ['ipsum', 'lore']
// }

// console.log(users);

// let names = users.map((elem) => {
//     console.log(elem.name);
// });

// let names = users.map((elem) => {
//     return elem.name;
// });

let names = users.map(({ name }) => name);
console.log(names);
