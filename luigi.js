const readlineSync = require("readline-sync");
let height;
let pyramidLeft;
let pyramidRight;
console.log();

do {
    height = Number(readlineSync.question("Height: "));
} while (Number.isNaN(height) || height % 1 !== 0 || height < 1 || height > 24);

console.log();

let level = height;

while (level > 0) {
    pyramidLeft = "";
    pyramidRight = "";

    for (i = 0; i <= height; i++) {
        pyramidLeft = pyramidLeft + "#";
    }
    for (i = 0; i < level - 1; i++) {
        pyramidLeft = pyramidLeft.replace(pyramidLeft.charAt(i), " ");
    }
    for (i = level - 2; i < height; i++) {
        pyramidRight = pyramidRight + "#";
    }

    console.log(pyramidLeft + " " + pyramidRight);
    level = level - 1
}
