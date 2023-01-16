// Завдання 5
// Отримати користувача (не масив) по email (поле email, він унікальний).

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

// function getUserWithEmail(users, search) {
//     return users.find((item) => {
//         return item.email === search;
//     });
// }

// function getUserWithEmail(users, email) {
//     return users.find(({ email: search }) => {
//         return search === email;
//     });
// }

let getUserWithEmail = (users, email) =>
    users.find(({ email: search }) => search === email);

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {об'єкт користувача Elma Head}
