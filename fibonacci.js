const readlineSync = require("readline-sync");
let number1 = 0
let number2 = 1
let number3 = 0
let value = 0
console.log();
do{
  value = Number(readlineSync.question("Positive integer: "));
} while (value < 1 || value > 78 || value % 1 != 0 || Number.isNaN(value))

for (i = 1; i <= value; i++) {
  number3 = number1 + number2
  number2 = number1
  number1 = number3
}

number1 = number1.toLocaleString()

console.log("\n" + number1 + ".")
