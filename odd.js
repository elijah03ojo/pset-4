const readlineSync = require("readline-sync");
let sum = 0
let integer = 0
console.log();
do{
  number = Number(readlineSync.question("Positive integer: "));
} while (number < 1 || number > Number.MAX_SAFE_INTEGER || Number.isNaN(number) || number % 1 != 0)

do {
  integer = number % 10;
  if (integer%2 != 0) {
    sum = sum + integer;
  }
  number = number - integer
  number = number/10;
} while (number >= 10);

sum = sum + number

console.log("\n" + sum + ".");
