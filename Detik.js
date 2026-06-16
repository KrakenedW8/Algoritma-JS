const prompt = require("prompt-sync")({ sigint: true });
let detik = Number(prompt("Masukkan waktu dalam satuan detik : "));

let menit = detik / 60;
let jam = menit / 60;
let hari = jam / 24;

console.log("===========================")
console.log("         H A S I L         ")
console.log("===========================")

console.log(
`${detik + " detik = "} 
Menit\t: ${menit.toFixed(2)} menit 
Jam\t: ${jam.toFixed(3)} jam
hari\t: ${hari.toFixed(3)} hari `)