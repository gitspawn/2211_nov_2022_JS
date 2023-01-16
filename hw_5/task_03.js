// Завдання 3
// Отримати масив імен користувачів за статтю (поле gender).

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

// function getUsersWithGender(users, gender) {
//     return users
//         .filter((item) => {
//             return item.gender === gender;
//         })
//         .map((item) => {
//             return item.name;
//         });
// }

function getUsersWithGender(users, search) {
    return users
        .filter(({ gender }) => gender === search)
        .map(({ name }) => name);
}

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
