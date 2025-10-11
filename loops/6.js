//Reverse the digits of a given number using a loop.

let number = parseInt(prompt("Enter a number to reverse its digits:"));
let reversedNumber = 0;

while (number > 0) {
    let digit = number % 10;
    reversedNumber = reversedNumber * 10 + digit;
    number = Math.floor(number / 10);
}

console.log("The reversed number is: " + reversedNumber);