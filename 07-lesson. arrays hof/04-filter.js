// Если не находить, то возвращает пустой массив []

// let friends = [
//     { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
//     { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
//     { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
//     { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
//     { id: 5, name: "Sveta", age: 18, budget: 1750, isComplete: true },
// ];

// [].filter((elem, idx, arr)=>{})

// let resArr = friends.filter((friend) => {
//     return friend.isComplete === true;
// });

// console.log(resArr);

// let resArr = friends.filter((friend) => {
//     return !friend.isComplete;
// });

// console.dir(resArr);

// let resArr = friends.filter((friend) => {
//     return friend.budget < 1000;
// });

// console.dir(resArr);

// let resArr = friends.filter((friend) => {
//     return friend.budget > 10000;
// });

// console.dir(resArr);

// ========================
// Все кроме Sara

let friends = [
    { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
    { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
    { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
    { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
    { id: 5, name: "Sveta", age: 18, budget: 1750, isComplete: true },
];

// let resArr = friends.filter((friend) => {
//     return friend.name !== "Sara";
// });

// console.log(resArr);

// ========================
// Only Sara

// let resArr = friends.filter(({ name }) => {
//     return name === "Sara";
// });

// let resArr = friends.filter(({ name }) => name !== "Sara");
// console.log(resArr);
