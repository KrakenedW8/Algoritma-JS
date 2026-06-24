const prompt = require("prompt-sync")({ sigint: true });
let  angka = Number(prompt("Masukan angka bulan (1-12): "))

if ( angka == 1 ){
    console.log("Januari")
} else if ( angka == 2){
    console.log("Februari")
} else if ( angka == 3){
    console.log("Maret")
} else if ( angka == 4){
    console.log("April")
} else if ( angka == 5){
    console.log("Mei")
} else if ( angka == 6){
    console.log("Juni")
} else if ( angka == 7){
    console.log("Juli")
} else if ( angka == 8){
    console.log("Agustus")
} else if ( angka == 9){
    console.log("September")
} else if ( angka == 10){
    console.log("Oktober")
} else if ( angka == 11){
    console.log("November")
} else if ( angka == 12 ){
    console.log("Desember")
} else {
    console.log("Invalid!")
}