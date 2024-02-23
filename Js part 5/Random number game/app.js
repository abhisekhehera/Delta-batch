let max = prompt("Enter the max number");

let random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while (true) {
    if (max == "quit") {
        console.log("You quit the game");
        break;
    }

    if (guess == random) {
        console.log(`Congratulation ! You won the game | Your choosen number is ${random} `);
        break;
    } else if (guess < random) {
        guess = prompt(`Hint: Your number is too small | Please try again`)

    } else {
        guess = prompt(`Hint: Your number is too large | Please try again`)
    }
}
