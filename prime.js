const readlineSync = require("readline-sync");
let number = 0
let prime_value = 0
console.log();
do{
  number = Number(readlineSync.question("Non-negative integer: "));
} while (number < 0 || number > Number.MAX_SAFE_INTEGER || number % 1 != 0 || Number.isNaN(number))

for (i = 2; i <= number/2; i++) {
  if (number % i == 0) {
    prime_value = 1
    break
  }
}

if (prime_value == 1) {
  console.log("\nNot prime.")
}
else {
  console.log("\nPrime.")
}
