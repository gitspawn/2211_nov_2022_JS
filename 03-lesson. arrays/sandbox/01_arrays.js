// Arrays

// const usersGirls = ["tetiana", "marina", "valeria"];
// const usersBoys = ["alex", "oleksii", "vitaliy"];

// [];
// const arr = new Array(1,2,3)

// const data = ["qwe", usersGirls, 100, "pizza", usersBoys, undefined, null];
// console.log(data);

// data[0];
// data[2];
// data[4];

// data[1][1][0][5]

// console.log(data[1][1]);
// console.log(data[1][2]);

// console.log(data[2]);
// console.log(data[0]);

// =================================
// Check is array
// const usersGirls = ["tetiana", "marina", "valeria"];
// console.log(typeof usersGirls);

// Array.isArray() ture / false

// console.log(Array.isArray("Vova"));
// console.log(Array.isArray(usersGirls));

// =============================
// length and last index
// const usersGirls = ["tetiana", "marina", "valeria"];
// const usersGirls = [];
// console.log(usersGirls.length);

// usersGirls[usersGirls.length - 1];
// console.log(usersGirls[usersGirls.length - 1]);

// if (usersGirls.length) {
//     console.log(usersGirls);
// }

//=============================
// find in arr
// const usersBoys = ["alex", "oleksii", "vitaliy"];
// [].includes(); -1 or index
// [].indexOf() true / false

// let res = usersBoys.includes("oleksii");
// console.log(res);

// let res = usersBoys.indexOf("sara");
// console.log(res);

// if (res !== -1) {
//     console.log("Знайшли");
// } else {
//     console.log("Не знайшли");
// }

// if (res) {
//     console.log("Знайшли");
// } else {
//     console.log("Не знайшли");
// }

// ==============================
// Изменить массив
// push - appent to the end
// pop - removes last
// shift - emoves first
// unshift - adds to start

// const usersBoys = ["alex", "oleksii", "vitaliy"];
// usersBoys.push("vova", 100, "Sveta");

// console.log(usersBoys);

// usersBoys.unshift("sara");
// console.log(usersBoys);

// ======================================
// Delete from array
// splice
// const usersBoys = ["alex", "oleksii", "vitaliy", "bob", "mike"];

// let admin = "Sara";
// delete admin;
// console.log(admin);

// delete usersBoys[1];
// console.log(usersBoys);

// let res = usersBoys.splice();
// let res = usersBoys.splice(3);
// let res = usersBoys.splice(1, 1);

// usersBoys.splice(2, 1);
// console.log(usersBoys);

// ==========================
// slice
// const usersBoys = ["alex", "oleksii", "vitaliy", "bob", "mike"];

// let res = usersBoys.slice();

// console.log(res === usersBoys);
// console.log(res);

// console.log(usersBoys.slice(1));
// console.log(usersBoys.slice(1, 4));

// ========================================
// concat
// const usersGirls = ["tetiana", "marina", "valeria"];
// const usersBoys = ["alex", "oleksii", "vitaliy"];
// const students = usersBoys.concat(usersGirls);
// const students = usersGirls.concat(usersBoys);

// const res = usersGirls.concat();
// console.log(res);
// console.log(res === usersGirls);

//=======================================
// split.reverse.join
// let str = "abcdefg";
// console.log(str);

// let res;
// res = str.split("").reverse().join("");

// console.log(res);

// =====================================
// Parse URI
// let uri =
//     "https://www.youtube.com/watch?v=AGBjI0x9VbM&author=vova&title=cartoone";

// let parse = uri.split("?")[1];
// let keys = parse.split("&");

// if(keys.indexOf === 'v=AGBjI0x9VbM') {

// }

// console.log(keys);

// =================================
// Convert to arr
// let arr = Array.from("sarta");
// console.log(arr);
