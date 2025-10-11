//Determine the factorial of a user-input number 'n'.

let n = parseInt(prompt("Enter a number to calculate its factorial:"));
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial *= i;
}
console.log("The factorial of " + n + " is: " + factorial);
