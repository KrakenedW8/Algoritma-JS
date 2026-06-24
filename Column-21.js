const input = require("prompt-sync")({ sigint: true });


const angkaBulan = Number(input("Masukkan nomor bulan (1-12): "));
const angkaTahun = Number(input("Masukkan tahun: "));

let jumlahHari = 0;

const isKabisat = (angkaTahun % 4 === 0 && angkaTahun % 100 !== 0) || (angkaTahun % 400 === 0);


switch (angkaBulan) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        jumlahHari = 31;
        break;
    case 4: case 6: case 9: case 11:
        jumlahHari = 30;
        break;
    case 2:
        jumlahHari = isKabisat ? 29 : 28;
        break;
    default:
        console.log("Nomor bulan tidak valid");
        break;
}


if (angkaBulan >= 1 && angkaBulan <= 12) {
    console.log("Jumlah hari = " + jumlahHari);
}