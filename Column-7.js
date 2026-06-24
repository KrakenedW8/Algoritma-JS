const input = require("prompt-sync")({ sigint: true });


const jumlahUang = Number(input("Masukkan jumlah uang: "));


let sisa = jumlahUang;

const pecahan1000 = Math.floor(sisa / 1000);
sisa %= 1000;

const pecahan500 = Math.floor(sisa / 500);
sisa %= 500;

const pecahan100 = Math.floor(sisa / 100);
sisa %= 100;

const pecahan50 = Math.floor(sisa / 50);
sisa %= 50;

const pecahan25 = Math.floor(sisa / 25);

console.log("Pecahan Rp1000 : " + pecahan1000);
console.log("Pecahan Rp500  : " + pecahan500);
console.log("Pecahan Rp100  : " + pecahan100);
console.log("Pecahan Rp50   : " + pecahan50);
console.log("Pecahan Rp25   : " + pecahan25);