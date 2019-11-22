const readlineSync = require("readline-sync");
var creditCard
var sum = 0
var creditLength
console.log();

do {
    creditCard = Number(readlineSync.question("Number: "));
} while (creditCard < 100000000000 || creditCard > 9999999999999999 || Number.isNaN(creditCard) || !Number.isInteger(creditCard))

creditCard = String(creditCard)
creditLength = creditCard.length


if (creditLength % 2 == 0) {
  for (i = creditLength; i = 0; i - 2) {
    var number = creditCard.charAt(creditLength-2)
    sum = sum + number * 2
  }
}
else {
  for (i = creditLength + 1; i = 0; i - 2) {
    var number = creditCard.charAt(creditLength-2)
    sum = sum + number * 2
  }
}
console.log(sum);
