// Завдання 2
// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor)

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

// function getUsersWithEyeColor(users, color) {
//     return users.filter((item) => {
//         return item.eyeColor === color;
//     });
// }

function getUsersWithEyeColor(users, color) {
    return users.filter(({ eyeColor }) => eyeColor === color);
}

console.log(getUsersWithEyeColor(users, "blue"));
