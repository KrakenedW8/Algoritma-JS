const prompt = require("prompt-sync")({ sigint: true });
const totalCm = Number(prompt("Masukan jarak tempuh anda:"));

let sisaJarak = totalCm;

const hasilKm = Math.floor(sisaJarak / 100000);
sisaJarak %= 100000;

const hasilMeter = Math.floor(sisaJarak / 100);
sisaJarak %= 100;

const hasilCm = sisaJarak;


console.log("Kilometer = " + hasilKm + " km");
console.log("Meter = " + hasilMeter + " m");
console.log("Centimeter = " + hasilCm + " cm");