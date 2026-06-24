const input = require("prompt-sync")({ sigint: true });


let inputJam = Number(input("Masukan jam nya: "));
let inputMenit = Number(input("Masukan menit nya: "));
let inputDetik = Number(input("Masukan detik nya: "));

inputDetik++;


if (inputDetik === 60) {
    inputDetik = 0;
    inputMenit++;
}

if (inputMenit === 60) {
    inputMenit = 0;
    inputJam++;
}

if (inputJam === 24) {
    inputJam = 0;
}


console.log("Jam : " + inputJam + " : " + inputMenit + " : " + inputDetik);