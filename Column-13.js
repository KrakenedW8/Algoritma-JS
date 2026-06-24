const prompt = require("prompt-sync")({ sigint: true });

let tahun = Number(prompt("Masukkan tahun: "));

if (tahun % 4 == 0) {
    console.log(tahun + " adalah tahun kabisat");
} else {
    console.log(tahun + " bukan tahun kabisat");
}