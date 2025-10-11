//verify if a given number is primt ot not using a loop.

let number = parseInt(prompt("Enter a positive integer:"));
let isPrime = true;

for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");    
}