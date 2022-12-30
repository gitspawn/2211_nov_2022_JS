// let a = 10;

// let b = a;
// console.log(a);
// console.log(b);

let a = [1, 2, 3, 4];
let b = a;

b.push(5);
a.push(100);

const c = [1, 2, 3, 4, 5, 100];
// const c = b;

c.push(200);

// console.log("a", a);
console.log("b", b);
// console.log(a === b);

console.log("c", c);
console.log("a", a);
console.log(a === c);
