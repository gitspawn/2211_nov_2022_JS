// Задача 6 - Массивы и строки
// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.

// let str = "abcdefg";
// console.log(str);

// let res;
// res = str.split("").reverse().join("");

// console.log(res);

function rev(str) {
    let res;
    res = str.split("").reverse().join("");
    return res;
}

let name = "Sveta";
let name2 = "Marina";
console.log(rev(name));
console.log(rev(name2));

alert();

// for( A;B;C){}
for (;;) {}

Number();
parseFloat();
parseInt();
