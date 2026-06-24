const input = require("prompt-sync")({ sigint: true });

// ==========================================
// SOAL 1
// ==========================================
const angkaInput = Number(input("Masukkan bilangan: "));

// Menggunakan logika pembagian bersisa untuk kelipatan 4
if (angkaInput % 4 === 0) {
    console.log("Angka tersebut adalah kelipatan 4");
} else {
    console.log("Angka tersebut bukan kelipatan 4");
}

// ==========================================
// SOAL 2
// ==========================================
const totalBelanja = Number(input("Total belanja: "));
let potonganHarga = 0;

if (totalBelanja > 100000) {
    potonganHarga = totalBelanja * 0.1;
}

const totalTagihan = totalBelanja - potonganHarga;

console.log(`Diskon = Rp${potonganHarga}`);
console.log(`Total bayar = Rp${totalTagihan}`);

// ==========================================
// SOAL 3
// ==========================================
let nilai1 = Number(input("Bilangan pertama: "));
let nilai2 = Number(input("Bilangan kedua: "));
let nilai3 = Number(input("Bilangan ketiga: "));


if (nilai1 > nilai2) {
    let temp = nilai1;
    nilai1 = nilai2;
    nilai2 = temp;
}
if (nilai1 > nilai3) {
    let temp = nilai1;
    nilai1 = nilai3;
    nilai3 = temp;
}
if (nilai2 > nilai3) {
    let temp = nilai2;
    nilai2 = nilai3;
    nilai3 = temp;
}

console.log(`Urutan: ${nilai1}, ${nilai2}, ${nilai3}`);

// ==========================================
// SOAL 4
// ==========================================
const sisiA = Number(input("Sisi a: "));
const sisiB = Number(input("Sisi b: "));
const sisiC = Number(input("Sisi c: "));


const kuadratA = sisiA * sisiA;
const kuadratB = sisiB * sisiB;
const kuadratC = sisiC * sisiC;
const totalSisiTegak = kuadratA + kuadratB;

if (totalSisiTegak === kuadratC) {
    console.log("Jenis: Segitiga siku-siku");
} else if (totalSisiTegak > kuadratC) {
    console.log("Jenis: Segitiga lancip");
} else {
    console.log("Jenis: Segitiga tumpul");
}

// ==========================================
// SOAL 5
// ==========================================
const teksDigit = input("Masukkan karakter digit (0-9): ");
console.log(`Nilai integer = ${parseInt(teksDigit, 10)}`);

// ==========================================
// SOAL 5A
// ==========================================
const karakterAngka = input("Masukkan digit (0-9): ");
console.log(`Nilai integer = ${parseInt(karakterAngka, 10)}`);

// ==========================================
// SOAL 5B
// ==========================================
const cekKarakter = input("Masukkan karakter: ");

if (cekKarakter >= "0" && cekKarakter <= "9") {
    console.log(`Nilai integer = ${Number(cekKarakter)}`);
} else {
    console.log("Nilai integer = -99");
}

// ==========================================
// SOAL 6
// ==========================================
const nilaiTransaksi = Number(input("Masukkan nilai belanja: "));
const hasilPembulatan = Math.floor(nilaiTransaksi / 25) * 25;

console.log(`Nilai setelah pembulatan = Rp${hasilPembulatan}`);

// ==========================================
// SOAL 7A
// ==========================================
const kodeBulan = Number(input("Masukkan bilangan (1-10): "));


switch (kodeBulan) {
    case 1: console.log("I"); break;
    case 2: console.log("II"); break;
    case 3: console.log("III"); break;
    case 4: console.log("IV"); break;
    case 5: console.log("V"); break;
    case 6: console.log("VI"); break;
    case 7: console.log("VII"); break;
    case 8: console.log("VIII"); break;
    case 9: console.log("IX"); break;
    case 10: console.log("X"); break;
    default: console.log("Di luar rentang"); break;
}

// ==========================================
// SOAL 7B
// ==========================================
let inputAngka = Number(input("Masukkan bilangan: "));
let teksRomawi = "";


while (inputAngka >= 1000) { teksRomawi += "M"; inputAngka -= 1000; }
while (inputAngka >= 900)  { teksRomawi += "CM"; inputAngka -= 900; }
while (inputAngka >= 500)  { teksRomawi += "D"; inputAngka -= 500; }
while (inputAngka >= 400)  { teksRomawi += "CD"; inputAngka -= 400; }
while (inputAngka >= 100)  { teksRomawi += "C"; inputAngka -= 100; }
while (inputAngka >= 90)   { teksRomawi += "XC"; inputAngka -= 90; }
while (inputAngka >= 50)   { teksRomawi += "L"; inputAngka -= 50; }
while (inputAngka >= 40)   { teksRomawi += "XL"; inputAngka -= 40; }
while (inputAngka >= 10)   { teksRomawi += "X"; inputAngka -= 10; }
while (inputAngka >= 9)    { teksRomawi += "IX"; inputAngka -= 9; }
while (inputAngka >= 5)    { teksRomawi += "V"; inputAngka -= 5; }
while (inputAngka >= 4)    { teksRomawi += "IV"; inputAngka -= 4; }
while (inputAngka >= 1)    { teksRomawi += "I"; inputAngka -= 1; }

console.log(`Angka Romawi = ${teksRomawi}`);

// ==========================================
// SOAL 8
// ==========================================
let nilaiPixel = Number(input("Masukkan nilai pixel: "));

if (nilaiPixel > 255) {
    nilaiPixel = 255;
} else if (nilaiPixel < 0) {
    nilaiPixel = 0;
}

console.log(`Hasil clipping = ${nilaiPixel}`);

// ==========================================
// SOAL 9
// ==========================================
const beratSekarang = Number(input("Masukkan berat badan (kg): "));
const tinggiSekarang = Number(input("Masukkan tinggi badan (cm): "));

const bobotIdeal = (tinggiSekarang - 100) * 0.9;
const selisihBobot = Math.abs(beratSekarang - bobotIdeal);

if (selisihBobot <= 2) {
    console.log("Kategori: Ideal");
} else {
    console.log("Kategori: Tidak ideal");
}