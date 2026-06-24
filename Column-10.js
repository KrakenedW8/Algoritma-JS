const ambilInput = require("prompt-sync")({ sigint: true });

const tinggiBadan = Number(ambilInput("Masukkan tinggi badan (cm): "));

const skorIdeal = (tinggiBadan - 100) * 0.9;

console.log("Berat badan ideal Anda: " + skorIdeal + " kg");