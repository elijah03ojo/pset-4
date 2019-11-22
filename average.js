const readlineSync = require("readline-sync");
let average = 0
let sum = 0
let denominator = 0
let integer = 0
console.log();
do{
  number = Number(readlineSync.question("Non-negative integer: "));
  if (number >= 0 && number < Number.MAX_SAFE_INTEGER && !Number.isNaN(number) && number % 1 == 0) {
    sum = number + sum
    denominator = denominator + 1
  }
} while ((number >= 0 && number < Number.MAX_SAFE_INTEGER &&  number % 1 == 0) || Number.isNaN(number) || denominator == 0)

average = sum/denominator

let average_formatted = average.toFixed(3);
let average_formatted_decimal = average_formatted.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
console.log("\n" + average_formatted_decimal + ".");
