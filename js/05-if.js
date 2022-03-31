/*
IF

Sablonai:
- if () {}
- if () {} else () {}
- if () {} else if () {}


Palyginimo operatoriai:
- visi: >, <, <=, >=, == (lygu), != (ne lygu), === (griezta lygybe), !== (griezta nelygybe)
- naudotini:>, <, <=, >=, === (griezta lygybe), !== (griezta nelygybe)
- NEnaudotini:== (lygu), != (ne lygu) del kodo saugumo
*/

const a = 7;
const b = 7;

if (a === b) {
    console.log('A yra lygu B');
} else {
    console.log('A nera lygu B');
}



const day = 1;
if (day === 1) {
    console.log('pirmadienis');
} else if (day === 2) {
    console.log('antradienis');
}

console.log('-------------------');

const akiuSpalva = 'melyna';

if (akiuSpalva === 'zalia') {
    console.log('Zaliaakiai yra zalciai!');
} else {
    if (akiuSpalva === 'melyna') {
        console.log('Melynakiai megsta melynes.');
    }
    
}

console.log('-------------------');

const temperatura = -25;
const nuoKadaLaikomeJogSilta = 15;
const arYraKrituliu = true;


if (arYraKrituliu === true) {
    if (temperatura >= nuoKadaLaikomeJogSilta) {
        console.log('Varyk su maike');
    } else {
        console.log('Tau reikes kailiniu');
    }
} else {
    if (temperatura >= nuoKadaLaikomeJogSilta) {
        console.log('Gali eiti nuogas');
    } else {
        console.log('Be striukes neapsieisi');
    }
}