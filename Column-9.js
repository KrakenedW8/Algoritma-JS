const input = require("prompt-sync")({ sigint: true });

const panjangMeter = Number(input("Masukkan panjang (meter): "));

const nilaiInci = panjangMeter / 0.0254;
const nilaiKaki = panjangMeter / 0.3048;
const nilaiYard = panjangMeter / 0.9144;
    
console.log("Hasil Inci : " + nilaiInci);
console.log("Hasil Kaki : " + nilaiKaki);
console.log("Hasil Yard : " + nilaiYard);