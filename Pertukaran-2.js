const prompt = require("prompt-sync")({ sigint: true });

let tglAwal = Number(prompt("Masukkan tanggal pertama:"));
let blnAwal = Number(prompt("Masukkan bulan pertama:"));
let thnAwal = Number(prompt("Masukkan tahun pertama:"));


let tglAkhir = Number(prompt("Masukkan tanggal Kedua:"));
let blnAkhir = Number(prompt("Masukkan bulan Kedua:"));
let thnAkhir = Number(prompt("Masukkan tahun Kedua:"));


let totalHariAwal = (thnAwal * 365) + (blnAwal * 30) + tglAwal;
let totalHariAkhir = (thnAkhir * 365) + (blnAkhir * 30) + tglAkhir;


let sisaHari = Math.abs(totalHariAwal - totalHariAkhir);


const hasilTahun = Math.floor(sisaHari / 365);
sisaHari %= 365;

const hasilBulan = Math.floor(sisaHari / 30);
const hasilHari = sisaHari % 30;

console.log(`Jaraknya adalah: ${hasilTahun} tahun, ${hasilBulan} bulan, ${hasilHari} hari.`);