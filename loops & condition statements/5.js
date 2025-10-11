let number = prompt("Enter a number to check if it's even or odd:");
let isEven = false;

for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        isEven = true;
        break;
    }
}

if (isEven) {
    console.log(`${number} is even.`);
} else {
    console.log(`${number} is odd.`);
}