// Lexical env

// let x = 10;
// let y = 20;
// Global Scope

// let Global_ENV = {
//     x: 10,
//     y: 20,
// };

function fnA() {
    let x = 10;
    let y = 20;

    let Functin_fnA_ENV = {
        x: 10,
        y: 20,
    };

    function fnB() {
        let x = 10;
        let y = 20;

        let Functin_fnB_ENV = {
            x: 10,
            y: 20,
        };
    }
}

// let z = 30;

// let Global_ENV = {
//     x: 10,
//     y: 20,
//     z: 30
// };
