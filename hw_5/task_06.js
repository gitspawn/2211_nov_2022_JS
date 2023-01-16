// Завдання 6
// Отримати масив користувачів, які потрапляють у вікову категорію від min до max років (поле age).

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

// function getUsersWithAge(users, min, max) {
//     // console.log(users);
//     let ageArr = [];

//     users.forEach((elem, idx, arr) => {
//         if (elem.age >= min && elem.age <= max) {
//             ageArr.push(elem);
//         }
//     });

//     return ageArr.map(({ name }) => name);
// }

// function getUsersWithAge(users, min, max) {
//     return users.filter((elem) => {
//         return elem.age >= min && elem.age <= max;
//     });
// }

console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]
