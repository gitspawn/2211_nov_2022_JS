// Завдання 4
// Отримати масив тільки неактивних користувачів (поле isActive).

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

// function getInactiveUsers(users) {
//     return users.filter((user) => {
//         return !user.isActive;
//     });
// }

// let getInactiveUsers = (users) => {
//     return users.filter(({ isActive }) => isActive);
// };

let getInactiveUsers = (users) => users.filter(({ isActive }) => !isActive);

console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]
