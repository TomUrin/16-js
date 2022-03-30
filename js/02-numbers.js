/*
NUMBERS:
- normalus:
    - sveikieji
    - desimtainiai
- nenormalus:
    - NaN (not-a-number)
    - Infinity; -Infinity

OPERATORIAI:
++ - padidinimas vienu vienetu
-- - sumazinimas vienu vienetu
+=, -=, *=, /= - savo paties reiksmes pakeitimas (a = a + 5 --> a += 5)
*/

const sveikasis = 5;
const desimtainis = 3.14;
const neigiamasDesimtainis = -3.14;
const neSkaicius = NaN;
const begalybe = Infinity;
const neigiamaBegalybe = -Infinity;

console.log('-----------');
console.log(2 ** 4);
console.log(3.14 ** 3.14);
console.log(7 % 2);
console.log(13 % 5);

console.log('-----------');
let pinigineAfter = 0;
console.log('Pinigine:', pinigineAfter++);
console.log('Pinigine:', pinigineAfter++);

console.log('-----------');
let pinigineBefore = 0;
console.log('Pinigine:', ++pinigineBefore);
console.log('Pinigine:', ++pinigineBefore);

console.log('-----------');
let skolaAfter = 0;
console.log('skola:', skolaAfter--);
console.log('skola:', skolaAfter--);

console.log('-----------');
let skolaBefore = 0;
console.log('skola:', --skolaBefore);
console.log('skola:', --skolaBefore);

let a = 0;
a = a +1;
console.log(a);
a++
console.log(a);

console.log('-----------');
let b = 0;
b = b + 3;
console.log(b);
b = b + 3;
console.log(b);
b = b + 3;
console.log(b);
b += 3;
console.log(b);

console.log('-----------');
let c = 16;
const d = 2;
console.log(c);
c = c / d;
console.log(c);
c /= d;
console.log(c);

console.log('-----------');
let e = 5;
console.log(e);
e /= e;
console.log(e);