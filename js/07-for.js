/*
LOOP: for, while, for-in, for-of, foreach, ...
*/

const pazymiai = [10, 2, 8, 4, 6];

let suma = 0;

for (let i=0; i<5; i++) {
    const pazymis = pazymiai[i];
    suma += pazymis;
    console.log(`${i}) pazymis ${pazymis} [${suma}]`);
}

const vidurkis = suma / pazymiai.length;
console.log('Vidurkis:', vidurkis);


for (let i=-80; i<-60; i++) {
    console.log(i);
}