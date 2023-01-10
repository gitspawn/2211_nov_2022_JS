// let fruits = ["melon", "apples", "pears", "bananes"];

// ============================
// let friends = [
//     { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
//     { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
//     { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
//     { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
// ];

// console.log(friends);

// "abcdefg".split("").reverse().join("");

// let res = friends
//     .filter((friend) => {
//         return friend.budget > 1000;
//     })
//     .map((item) => {
//         return {
//             name: item.name,
//             budget: item.budget,
//         };
//     })
//     .reduce((total, employee) => {
//         return total + employee.budget;
//     }, 0);

// let res = friends
//     .filter(({ budget }) => budget > 1000)
//     // .map((item) => ({
//     //     name: item.name,
//     //     budget: item.budget,
//     // }));
//     .map(({ name, budget }) => ({
//         name,
//         budget,
//     }))
//     .reduce((total, { budget }) => total + budget, 0);

// let res = friends
//     .filter(({ budget }) => budget > 1000)
//     .map(({ name, budget }) => ({
//         name,
//         budget,
//     }))
//     .reduce((total, { budget }) => total + budget, 0);

// let friends = [
//     { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
//     { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
//     { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
//     { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
// ];

// let res = friends
// .map(({ budget }) => budget)
// .sort((a, b) => a - b);
// console.log(res);
