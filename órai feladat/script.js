"use strict";

let ev = new Date().getFullYear();

// "hónap neve": {nap száma: "szöveg"}

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

let honapokTaroltAdat = {
    
};

let honapCsere = (honapNeve) => {
    
};

for (let honapSzama = 1; honapSzama < 13; honapSzama++) {
    let jelenlegiHonap = new Date(ev, honapSzama);
    let napokAdatok = {};
    for (let napSzama = 1; napSzama < jelenlegiHonap.get; index++) {
        const element = array[index];
        
    }
    honapokTaroltAdat[honapokNevei[honapSzama - 1]] = napokAdatok;
};