"use strict";

let ev = new Date().getFullYear();

let honapokNevei = [
    "Január",
    "Február",
    "Március",
    "Április",
    "Május",
    "Június",
    "Július",
    "Augusztus",
    "Szeptember",
    "Október",
    "November",
    "December"
];


// "hónap neve": max napok száma
let honapokMaxNap = {};

// "hónap neve": {nap száma: "szöveg"}
let honapokTaroltAdat = {
    
};

let honapCsere = (honapNeve) => {
    document.getElementById("divNapok").innerHTML = "";
    for (let napIndex = 1; napIndex < honapokMaxNap[honapNeve] + 1; napIndex++) {
        let ujDiv = document.createElement("div");
        ujDiv.id = `divHonap-${honapNeve}-${napIndex}`;
        let ujBekezdes = document.createElement("p");
        ujBekezdes.innerHTML = napIndex + ".";
        let ujSzovegesMezo = document.createElement("input");
        ujSzovegesMezo.type = "text";
        ujSzovegesMezo.value = ""
        ujSzovegesMezo.id = `txt-${honapNeve}-${napIndex}`
    };
};

for (let honapSzama = 1; honapSzama < 13; honapSzama++) {
    let jelenlegiHonap = new Date(ev, honapSzama, 0);
    let napokAdatok = {};
    for (let napSzama = 1; napSzama < jelenlegiHonap.getDate() + 1; index++) {
         napokAdatok[napSzama] = ""
    };
    honapokMaxNap[honapokNevei[honapSzama - 1]] = jelenlegiHonap.getDate()
    honapokTaroltAdat[honapokNevei[honapSzama - 1]] = napokAdatok;
};

honapCsere("Január")