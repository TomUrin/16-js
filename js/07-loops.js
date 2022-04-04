/*
LOOP: for, while, for-in, for-of, foreach, ...
*/

const pazymiai = [10, 2, 8, 4, 6];

let suma = 0;

for (let i1=0; i1<5; i1++) {
    const pazymis = pazymiai[i1];
    suma += pazymis;
    console.log(`${i1}) pazymis ${pazymis} [${suma}]`);
}

const vidurkis = suma / pazymiai.length;
console.log('Vidurkis:', vidurkis);

function find_average(array) {
    array.reduce((a,b) => a + b, 0) / array.length;
     if (array == false){
       return 0;
     } 
     }

//WHILE


let sumaWhile = 0;
let i2 = 0;
while (i2 < pazymiai.length) {
    const pazymis = pazymiai[i2];
    sumaWhile += pazymis;
    console.log(`${i2}) pazymis ${pazymis} [${sumaWhile}]`);
    i2++;
}

// FOR-OF
let sumaForOf = 0;
let i3 = 0;
for (const pazymis of pazymiai) {
  sumaForOf += pazymis;
  console.log(`${i3++}) pazymis ${pazymis} [${sumaWhile}]`);
}
//FOREACH
console.log('---------------------------');
let sumaForEach = 0;
pazymiai.forEach((pazymis, i4, pazymiaiRef) => {
  sumaForEach += pazymis;
  console.log(`${i4}) pazymis ${pazymis} [${sumaForEach}]`);
});

