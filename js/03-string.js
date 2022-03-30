/*
STRING

kabutes:
- viengubos('')
- dvigubos ("")
- backtick'as (`)

Teksto simboliu kiekis: .lenght

*/

const name = 'Petras';
console.log(name);

const lastName = "Petraitis";
console.log(lastName);

const viengubaKabute = "viengubos (')";
console.log(viengubaKabute);

const dvigubaKabute = 'dvigubos (")';
console.log(dvigubaKabute);

const viengubakabute12 = 'Cia yra vienguba (\') ir dviguba (") kabutes.';
console.log(viengubakabute12);

const dvigubakabute12 = "Cia yra vienguba (') ir dviguba (\") kabutes.";
console.log(dvigubakabute12);

const clientName = 'Petras';
const clientAge = 72;
const clientSentence = 'Client ' + clientName + ' is ' + clientAge + ' years old.';
console.log(clientSentence);

const backtickClient = `Client ${clientName} is ${clientAge} years old.`;
console.log(backtickClient);

const n1 = 7;
const n2 = 5;
const ats = `${n1} + ${n2} = ${n1 + n2}`;
console.log(ats);

const abc = 'abcdef';
const abcDydis = abc.length;
console.log(`Abeceles "${abc}" dydis yra ${abcDydis} simboliu.`);