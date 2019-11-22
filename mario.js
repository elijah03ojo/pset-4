
const readlineSync = require("readline-sync");
let height;
let pyramid;
console.log();

do {
  height = Number(readlineSync.question("Height: "));
} while (Number.isNaN(height) || height % 1 !== 0 || height < 1 || height > 24);

console.log();
let level = height;
while (level > 0) {
  pyramid = "";
  for (i = 0; i <= height; i++) {
      pyramid = pyramid + "#";
  }
  for (i = 0; i < level - 1; i++) {
      pyramid = pyramid.replace(pyramid.charAt(i), " ");
  }
  console.log(pyramid);
  level = level - 1
}
