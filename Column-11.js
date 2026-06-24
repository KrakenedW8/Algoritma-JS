const prompt = require("prompt-sync")({ sigint: true });
const nilaiX = Number(prompt("Masukan nilai X:"));
const nilaiY = Number(prompt("Masukan nilai Y:"));

let posisiKuadran = "";


if (nilaiX < 0 && nilaiY > 0) {
    posisiKuadran = "Kuadran 2";
} else if (nilaiX > 0 && nilaiY > 0) {
    posisiKuadran = "Kuadran 1";
} else if (nilaiX < 0 && nilaiY < 0) {
    posisiKuadran = "Kuadran 3";
} else if (nilaiX > 0 && nilaiY < 0) {
    posisiKuadran = "Kuadran 4";
} else {
    posisiKuadran = "Titik berada di pusat atau sumbu koordinat";
}


console.log("Posisi titik: " + posisiKuadran);