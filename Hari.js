const prompt = require("prompt-sync")({ sigint: true });
let hari = Number(prompt("Masukkan berapa hari yang ingin dikonversi : "));

let minggu = hari / 7;
let bulan = hari / 30;
let tahun = hari / 365;

console.log("===========================")
console.log("         H A S I L         ")
console.log("===========================")

console.log(
`${hari + " hari = "} 
Minggu\t: ${minggu.toFixed(0)} minggu 
Bulan\t: ${bulan.toFixed(0)} Bulan
Tahun\t: ${tahun.toFixed(0)} Tahun `)