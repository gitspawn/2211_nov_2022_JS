// Завдання 10
// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

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

// const getSortedUniqueSkills = (users) => {
//     return users
//         .reduce((acc, { skills }) => {
//             // console.log(skills);
//             return acc.concat(skills);
//         }, [])
//         .filter((skill, idx, arr) => {
//             return idx === arr.indexOf(skill);
//         })
//         .sort();
// };

// const getSortedUniqueSkills = (users) => {
//     return users
//         .reduce((acc, { skills }) => {
//             return [...acc, ...skills];
//         }, [])
//         .filter((skill, idx, arr) => {
//             return idx === arr.indexOf(skill);
//         })
//         .sort();
// };

const getSortedUniqueSkills = (users) => {
    return users
        .reduce((acc, { skills }) => [...acc, ...skills], [])
        .filter((skill, idx, arr) => idx === arr.indexOf(skill))
        .sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
