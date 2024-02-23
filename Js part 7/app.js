
// Qs 1

avg = (num1, num2) => {
    return (num1 + num2)/2 ;
}
console.log(avg(3, 6));

// Qs 2

isEven = (num) => {
    if (num%2 == 0) {
        console.log("Even number");
    } else {
        console.log("enter a even number");
    }
}
console.log(isEven(4));

// Qs 3

const object = {
    message: 'Hello,world!',
    lowMessage() {
        console.log(this.message);
    }
    
}
object.lowMessage();
setTimeout(object.lowMessage, 2000);


// Qs 4

let length = 4;
function callback() {
    console.log(this.length);
}
const obj = {
    length: 5,
    method(callback) {
        callback();
    },

};

obj.method(callback, 1, 2);
