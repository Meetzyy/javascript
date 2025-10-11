//Calculate the sum of the first 'n' natural numbers, where 'n' is provided by the user.

let n = parseInt(prompt("Enter a positive integer:"));
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log("The sum of the first " + n + " natural numbers is: " + sum);