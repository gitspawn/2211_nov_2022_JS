// let fruits = ["apple", "banana", "pear", "melon"];
// let users = ["vova", "sara", "bob", "mike"];
// let numbers = [10, 20, 30, 40, 45, 4];
// for (let idx = 0; idx < fruits.length; idx++) {
//     console.log(fruits[idx]);
// }

// for (let idx = 0; idx < users.length; idx++) {
//     console.log(users[idx]);
// }

// function dispalyArr(arr) {
//     for (let idx = 0; idx < arr.length; idx++) {
//         console.log(arr[idx]);
//     }
// }

// dispalyArr(users);
// dispalyArr(fruits);
// dispalyArr(numbers);

// function lengthCount(pizza) {
//     console.log(pizza.length);
// }

// lengthCount(numbers);
// lengthCount(users);

// ==============================
// Find in arr

// const findItem = function (arr, itemName) {
//     if (arr.includes(itemName)) {
//         return true;
//     } else {
//         return false;
//     }
// };

// const findItem = function (arr, itemName) {
//     return arr.includes(itemName) ? true : false;
// };

// let fruits = ["apple", "banana", "pear", "melon"];

// console.log(findItem(fruits, "melon"));

// / Задача 7 - Поиск элемента
// Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для любого массива чисел. Используй цикл для решения задачи.

const numbers = [17, 94, 2, 23, -5, 37];
let numbers_2 = [10, 20, 30, 40, 45, 4, 1000];
// let min = Math.min(...numbers);
// console.log(min);

// let min = numbers[0];

// for (let num of numbers) {
//     // console.log(num);
//     if (min > num) {
//         min = num;
//     }
// }

// function getMin(numsArr) {
//     let min = numbers[0];

//     for (let num of numsArr) {
//         if (min > num) {
//             min = num;
//         }
//     }

//     return min;
// }

// console.log(getMin(numbers));
// console.log(getMin(numbers_2));
