const prompt = require("prompt-sync")({ sigint: true });

let x = Number(prompt("Masukkan x: "));
let y = Number(prompt("Masukkan y: "));
let z = Number(prompt("Masukkan z: "));

let temp = x;
x = y;
y = z;
z = temp;

console.log("x =", x);
console.log("y =", y);
console.log("z =", z);