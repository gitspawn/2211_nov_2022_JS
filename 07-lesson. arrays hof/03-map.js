let numbers = [10, 20, 30, 40, 50];

// [].map((elem, idx, arr) => {});

// numbers.map((num, idx, arr) => {
//     // console.log(num);
//     // console.log(idx);
//     // console.log(arr);
// });

// let res = numbers.map((num, idx, arr) => {
//     return num + 2;
// });

// console.log(res);
// console.log(res === numbers);

//==================================

// let friends = [
//     { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
//     { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
//     { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
//     { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
// ];

// let budgetsArr = friends.map((item) => {
//     // console.log(item);
//     return item.budget;
// });

// console.log(budgetsArr);

// let namesArr = friends.map(({ name }) => {
//     // console.log(item);
//     return name;
// });

// console.log(namesArr);

// ==============================

let friends = [
    { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
    { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
    { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
    { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
];

let bonusForUser = "Sara";

let friendsArr = friends.map((friend) => {
    // console.log(friend);
    if (friend.name === bonusForUser) {
        return {
            ...friend,
            budget: friend.budget + 500,
        };
    }

    return friend;
});

console.log(friendsArr);

// let alex = {
//     name: "Alex",
//     budget: 2000,
// };

// let sara = {
//     ...alex,
//     budget: 3000,
// };
