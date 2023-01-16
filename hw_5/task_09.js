/* Завдання 9
Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends) */

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

// const getNamesSortedByFriendsCount = (users) => {
//     return users
//         .sort((a, b) => {
//             return a.friends.length - b.friends.length;
//         })
//         .map(({ name }) => name);
// };

const getNamesSortedByFriendsCount = (users) => {
    return users
        .sort(({ friends: fr_1 }, { friends: fr_2 }) => {
            return fr_1.length - fr_2.length;
        })
        .map(({ name }) => name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
