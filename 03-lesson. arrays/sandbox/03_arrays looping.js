// Array looping
// FOR
// let users = ["SvEtA", "OlGA", "jVan", "jOhN"];

// for (let i = 0; i < users.length; i += 1) {
//     console.log(users[i]);
// }

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i].toUpperCase());
// }

// let nums = [10, 20, 30, 40, 50];

// for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i] * 2);
// }

// ================================
// for ... of
// let nums = [10, 20, 30, 40, 50];

// for (let item of nums) {
//     console.log(item + 2);
// }

// let users = ["SvEtA", "OlGA", "jVan", "jOhN"];
// console.log(users);
// let newUsers = [];

// for (let user of users) {
//     let small = user.toLowerCase();
//     let cap = user[0].toUpperCase() + small.slice(1);
//     // console.log(cap);
//     newUsers.push(cap);
// }

// console.log(newUsers);
// console.log(newUsers === users);

// ========================================
// Find in arr wia loop
// let fruits = ["apples", "bananes", "melon", "pear"];
// [].includes();
// [].indexOf();

// let fruitToFind = "melon";

// for (let fruit of fruits) {
//     // console.log(fruit);
//     if (fruit === fruitToFind) {
//         console.log("Знайшли");
//         break;
//     }
// }

// for (let i = 0; i < fruits.length; i++) {
//     // console.log(fruits[i]);
//     if (fruits[i] === fruitToFind) {
//         console.log("Знайшли");
//     }
// }

// ===============================
// Array copy wia loop
// let fruits = ["apples", "bananes", "melon", "pear"];
// let fruitsCopy = [];

// for (const item of fruits) {
//     fruitsCopy.push(item);
// }
// console.log(fruitsCopy);

// =====================================
// Remove from array wia loop
// let fruits = ["apples", "bananes", "melon", "pear"];
// let fruitToFind = "bananes";

// for (let i = 0; i < fruits.length; i += 1) {
//     // console.log(fruits[i]);

//     if (fruits[i] === fruitToFind) {
//         // console.log("Знайшли");
//         fruits.splice(i, 1);
//     }
// }

// console.log(fruits);

// for (const fruit of fruits) {
//     if (fruit === fruitToFind) {
//         let idx = fruits.indexOf(fruit);
//         // console.log(idx);
//         fruits.splice(idx, 1);
//     }
// }

// console.log(fruits);

// ======================================
// Update elemem wiz loop

// for (const fruit of fruits) {
//     if (fruit === fruitToFind) {
//         let idx = fruits.indexOf(fruit);
//         fruits[idx] = "bananes AFRICA";
//     }
// }

// for (let i = 0; i < fruits.length; i += 1) {
//     if (fruits[i] === fruitToFind) {
//         fruits[i] = "PIZZA";
//     }
// }

// console.log(fruits);

// =======================================

// CRUD
// C - create;
// R - read;
// U - update;
// D - delete;

// =========================================
