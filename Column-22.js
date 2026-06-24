const input = require("prompt-sync")({ sigint: true });


const nomorBulan = Number(input("Masukan angka bulan: "));


switch (nomorBulan) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        console.log("Total harinya adalah 31");
        break;
        
    case 4: case 6: case 9: case 11:
        console.log("Total harinya adalah 30");
        break;
        
    case 2:
        console.log("Total harinya adalah 29 klo kabisat, bkn kabisat 28");
        break;
        
    default:
        console.log("Bulan sampai 12 aja");
        break;
}