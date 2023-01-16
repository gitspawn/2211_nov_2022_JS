// Завдання 8
// Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

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

function getUsersWithFriend(users, search) {
    return users.filter(({ friends }) => {
        return friends.includes(search);
    });
    // .map(({ name }) => name);
}

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
