//Count the given number of digits in a positive integer using a loop.

let number = parseInt(prompt("Enter a positive integer:"));
let count = 0;

while (number > 0) {
    number = Math.floor(number / 10);
    count++;
}

console.log("The number of digits  is: " + count);