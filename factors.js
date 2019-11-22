const readlineSync = require("readline-sync");
var value = 0;
var loop_counter = 1;
var factors = "\n";
console.log()

do{
  value = Number(readlineSync.question("Positive integer: "));
} while (value < 1 || value > Number.MAX_SAFE_INTEGER || value % 1 != 0 || Number.isNaN(value))

if (Math.sqrt(value)%1 == 0) {
  var numberLoop = Math.sqrt(value) + 1
}
else {
  var numberLoop = Math.sqrt(value)
}

while (loop_counter < numberLoop) {
  if ((value/loop_counter)%1 == 0) {
    if (value/loop_counter == loop_counter) {
      factors = factors + String(loop_counter);
      if (loop_counter < Math.sqrt(value)-1) {
        factors = factors + ", "
      }
      else {
        factors = factors + "."
      }
    }
    else {
      factors = factors + String(loop_counter) + ", " + String(value/loop_counter)
      if (loop_counter < Math.sqrt(value)-1) {
        factors = factors + ", "
      }
      else {
        factors = factors + "."
      }
    }
  }
  loop_counter = loop_counter + 1
}

console.log(factors)
