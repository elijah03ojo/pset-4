const readlineSync = require("readline-sync");
let counter = 1
let creditNumber = 0
let addition = 0
let creditNumber2 = 0
let sum = 0
let digit1 = 0
let digit2 = 0
let singularDigit = 0
let digit = 0
console.log();

do {
  creditNumber = Number(readlineSync.question("Number: "));
} while (creditNumber < 1000000000000 || creditNumber > 9999999999999999 || Number.isNaN(creditNumber) || !Number.isInteger(creditNumber))

creditNumber2 = creditNumber

while (creditNumber2 >= 1) {
  creditNumber2 = creditNumber2 / 10
  digit = digit + 1
}
digit1 = Math.floor(creditNumber / 10 ** (digit - 1))
digit2 = (Math.floor(creditNumber / 10 ** (digit - 2)) / 10) * 10

for (let loop = 0; loop < digit; loop++) {
  singularDigit = (creditNumber - Math.floor(creditNumber / 10) * 10)
  creditNumber = Math.floor(creditNumber / 10)
  if (loop % 2 == 1) {
    if (singularDigit * 2 >= 10) {
      addition = addition + ((singularDigit * 2 - singularDigit * 2 % 10) / 10 + singularDigit * 2 % 10)
    }
    else if (singularDigit * 2 < 10) {
      addition = addition + singularDigit * 2
    }
  }
  else {
    addition = addition + singularDigit
  }
  counter = counter + 1
}

if (addition / 10 % 1 != 0) {
  console.log("\nInvalid.")
}
else if (digit == 15 && (digit2 == 34 || digit2 == 37)) {
  console.log("\nAmex.")
}
else if (digit == 16 && (digit2 <= 55 && digit2 >= 51)) {
  console.log("\nMastercard.")
}
else if ((digit == 13 || digit == 16) && digit1 == 4) {
  console.log("\nVisa.")
}
