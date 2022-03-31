/*
visi mokiniai turi tik 4 pazymius ir reikia suskaiciuoti vidurki.
*/

const petras = [10, 4, 8, 2];
const maryte = [6, 5, 2, 9];
const jonas = [7, 4, 4, 3];
const ona = [5, 6, 7, 2];

/*
let petroSuma = 0;
petroSuma += petras [0];
petroSuma += petras [1];
petroSuma += petras [2];
petroSuma += petras [3];
const petroKiekis = petras.length;
const petroVidurkis = petroSuma / petroKiekis;
console.log('Petras:', petroVidurkis);

let marytesSuma = 0;
marytesSuma += maryte [0];
marytesSuma += maryte [1];
marytesSuma += maryte [2];
marytesSuma += maryte [3];
const marytesKiekis = maryte.length;
const marytesVidurkis = marytesSuma / marytesKiekis;
console.log('Maryte:', marytesVidurkis);
*/

function vidurkis(pazymiuSarasas) {
    let pazymiuSuma = 0;
    pazymiuSuma += pazymiuSarasas[0];
    pazymiuSuma += pazymiuSarasas[1];
    pazymiuSuma += pazymiuSarasas[2];
    pazymiuSuma += pazymiuSarasas[3];
    return pazymiuSuma / pazymiuSarasas.length;
}

const petroVidurkis = vidurkis(petras);
console.log('Petras:', petroVidurkis);

const marytesVidurkis = vidurkis(maryte);
console.log('Maryte:', marytesVidurkis);

const jonoVidurkis = vidurkis(jonas);
console.log('Jonas:', jonoVidurkis);

const onosVidurkis = vidurkis(ona);
console.log('Ona:', onosVidurkis);

/*
Funkcija 
*/
