const prompt = require("prompt-sync")({ sigint: true });
let nilai = Number(prompt("Masukan nilai anda: "));

if ( nilai > 80){
    console.log("Nilai anda adalah A")
} else if ( nilai > 70 && nilai < 80){
    console.log("Nilai anda adalah B")
} else if ( nilai > 55 && nilai < 70){
    console.log("Nilai anda adalah C")
} else if ( nilai > 40 && nilai < 55){
    console.log("Nilai anda adalah D")
} else {
    console.log("Nilai anda adalah E ")
}