// [].method((elem, idx,arr)=>{ return имененный массив})

// [].reduce((acc, elem, idx, arr) => {}, accStart);

// ''
// ""
// []
// 0,
// 100,
// {},
// true,
// undefined

// let numbers = [10, 20, 30, 40, 50];

// let res = numbers.reduce((acc, elem, idx, arr) => {
//     // console.log(elem);
//     // console.log(idx);
//     // console.log(arr);

//     // console.log(acc, elem, idx);

//     return acc + elem;
// }, 0);

// console.log(res);

//=========================================

// let friends = [
//     { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
//     { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
//     { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
//     { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
// ];

// let totalBuget = friends.reduce((total, item, idx, arr) => {
//     return total + item.budget;
// }, 0);

// console.log(totalBuget);
// ==========================================

// let cart = [
//     { id: 1, product: "Apple", price: 1200, qty: 2 },
//     { id: 2, product: "Samsung", price: 800, qty: 1 },
//     { id: 3, product: "LG", price: 1000, qty: 3 },
// ];

// 1200 * 2
// 800 * 1
// 1000 * 3

// 6200

// let totalSum = cart.reduce((total, product) => {
//     return total + product.price * product.qty;
// }, 0);

// console.log(totalSum);

// let totalSum = cart.reduce((total, { price, qty }) => {
//     return total + price * qty;
// }, 0);

// let totalSum = cart.reduce((total, { price, qty }) => total + price * qty, 0);

// console.log(totalSum);

// ================================

// let titles

// let cart = [
//     { id: 1, product: "Apple", price: 1200, qty: 2 },
//     { id: 2, product: "Samsung", price: 800, qty: 1 },
//     { id: 3, product: "LG", price: 1000, qty: 3 },
// ];

// let titles = cart.map(({ product }) => product);

// let titles = cart.map((item) => {
//     return item.product;
// });

// let titles = cart.reduce((acc, item) => {
//     acc.push(item.product);
//     return acc;
// }, []);
// console.log(titles);
