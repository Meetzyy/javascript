//Showcase the multiplication table of a given number (e.g., 5) using a loop.

let number = 5;
console.log(`Multiplication Table of ${number}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}