let arr = [2, 4, 6, 8, 1, 10];

const square = arr.map((num) => num * num);
console.log(square);

let sum = square.reduce((a, b) => a + b);

let avg = sum / 5;

console.log(Math.ceil(avg));

// Q2

console.log(arr.map((nums) => nums + 5));

// Q3

let str = ["Abhisekh", " ipsita", "santosh"];

console.log(str.map((strs) => strs.toUpperCase()));


function doubleAndReturnArgs(arr, ...args) {


}

function calSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;

}
let str1 = ['a', 'b', 'c', 'd'];
function concat(str1) {
    let result = "";
    for (let i = 0; i < str1.length; i++) {
        result += str1[i];
    }
    return result;
}
console.log(concat(str1));



// Higher order function

function multiGreet(neew, count) {
    for (let i = 1; i <= count; i++) {
        neew()
    }
}
let greet = function () {
    console.log("Hello");
}
multiGreet(greet, 10);


// return a function

function factoryFunc(request) {
    if (request == "odd") {
        return function (n) {
            console.log(n % 2 != 0);
        }



    } else if (request == "even") {
        return function (n) {
            console.log(n % 2 == 0);
        }

    } else {
        console.log("Wrong request | Enter a valid request");
    }

}
let request = "odd";


// Meathods

// this is also a valid syntax to write meathod
// const calculator = {
//     add:  function (a, b) {
//         return a + b;
//     },
//     sub: function (a, b) {
//         return a - b;
//     },
//     mul: function (a, b) {
//         return a * b;
//     },
//     div: function (a, b) {
//         return a / b;
//     },
//     rem: function (a, b) {
//         return a % b;
//     }
// }

// thsi is the 2nd one to write meathod

const calculator = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    },
    mul(a, b) {
        return a * b;
    },
    div(a, b) {
        return a / b;
    },
    rem(a, b) {
        return a % b;
    }
}




