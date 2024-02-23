//  Qs 1

// let arr = [4, 5, 8, 9, 10, 67];
// let num = 5;

// function getElements(arr, num) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > num) {
//             console.log(arr[i]);
//         }
//     }

// }
// getElements(arr, num);


// Qs 2
// let str = ["abcdabcdefgggh"];

// function getUnique(str) {

//     let ans = "";
//     for (let i = 0; i < str.length; i++) {
//         const currChar = str[i];
//         if (ans.indexOf(currChar) == -1) {

//             ans += currChar;
//         }
//     }

//     return ans;
// }

// console.log(getUnique(str));


function unique_chaar(str1) {
    let str = str1;

    let unique = "";

    for (let x = 0; x < str.length; x++) {
        if (unique.indexOf(str.charAt(x)) == -1) {
            unique += str[x]

        }
    }
    return unique;
}
console.log(unique_chaar("AbhisekhbeherA"));



// function Longest_Country_Name(country_name) {

//     return country_name.reduce(function (lname, country) {

//         return lname.length > country.length ? lname : country;
//     }, "");
// }


// console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));


let country = ["United states of america", "Australia", "India", " japan"];

function longestName(country) {
    let ansIdx = 0;
    // askIdx is store the index and the longest name
    for (let i = 0; i < country.length; i++) {

        let ansLen = country[ansIdx].length;

        let currLen = country[i].length;

        if (currLen > ansLen) {
            ansIdx = i;
        }

    }
    return country[ansIdx];
}
longestName(country);


// Qs 4

let str = "abhisekh";

function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (
            str.charAt(i) == 'a' ||
            str.charAt(i) == 'e' ||
            str.charAt(i) == 'i' ||
            str.charAt(i) == 'o' ||
            str.charAt(i) == 'u'
        ) {
            count++;
        }
    }
    return count;
}
console.log(countVowels(str));


// Qs 5

let firstNum = 100;
let secondNum = 500;

function RanomNum(firstNum, secondNum) {
    let diff = secondNum - firstNum;
    return Math.floor(Math.random() * diff) + firstNum;
}
console.log(RanomNum(firstNum, secondNum));




