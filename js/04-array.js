/*
ARRAY
- pozicijos prasideda nuliu
- pozicijos tik sveikieji skaiciai
- ilgis -> .length
*/

const pazymiai = [10, 2, 8, 4, 6]
console.log('Pazymiai:', pazymiai);

// koks pirmas
// koks paskutinis
// pazymiu vidurkis
// pazymiu kiekis

console.log('Pirmas:', pazymiai[0]);
console.log('Antras:', pazymiai[1]);
console.log('Paskutinis:', pazymiai[0]);

const pazymiuKiekis = pazymiai.length;
const paskutinioPozicija = pazymiuKiekis - 1;
console.log('Paskutinis:', pazymiai[paskutinioPozicija]);
console.log('Paskutinis:', pazymiai[pazymiai.length - 1]);


// masyvas -> ilgis -> paskutinio pozicija
// [1] -> 1 -> 0
// [1, 2] -> 2 -> 1
// [1, 2, -6] -> 3 -> 2
// [1, 2, -6, 13] -> 4 -> 3

const studentai = ['Petras', 'Maryte', 'Jonas']
console.log(studentai);