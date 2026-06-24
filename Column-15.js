const prompt = require("prompt-sync")({ sigint: true });

let bilangan = Number(prompt("Masukkan bilangan bulat: "));

if (bilangan > 0) {
    console.log("Bilangan positif");
} else if (bilangan < 0) {
    console.log("Bilangan negatif");
} else {
    console.log("Bilangan nol");
}