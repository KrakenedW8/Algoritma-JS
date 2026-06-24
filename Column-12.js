const input = require("prompt-sync")({ sigint: true });

const totalJam = Number(input("Masukkan jumlah jam kerja: "));
let totalUpah = 0;


const Batas_Reguler = 48;
const Tarif_Reguler = 2000;
const Tarif_Lembur = 3000;

if (totalJam > Batas_Reguler) {
    const sisaJamLembur = totalJam - Batas_Reguler;
    totalUpah = (Batas_Reguler * Tarif_Reguler) + (sisaJamLembur * Tarif_Lembur);
} else {
    totalUpah = totalJam * Tarif_Reguler;
}


console.log("Total upah mingguan Anda: Rp" + totalUpah);