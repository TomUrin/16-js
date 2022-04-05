function numSize(num){
    if (typeof num !== 'number' 
        //|| isNaN(num)
        || !isFinite(num)) {
    return 'ERROR: netinkamas tipas';
}
// number -> string
// number -> array
const numAsString = '' + num;
let size = numAsString.length;
if (//numAsString.includes('.')
    //nustatome ar skaicius yra desimtainis (turi kableli)
    num % 1 !==0) {
    size--;
}
// jei skaicius neigiamas
if (num < 0) {
    size--
}
return size;
}

console.log(numSize(5), '-->', 1);
console.log(numSize(781), '-->', 3);
console.log(numSize(37060123456), '-->', 11);
console.log(numSize(true), '-->', 'ERROR');
console.log(numSize('asd'), '-->', 'ERROR');
console.log(numSize(NaN), '-->', 'ERROR');
console.log(numSize(3.14), '-->', 3);
//console.log(numSize(2.456), '-->', 4);
//console.log(numSize(-5), '-->', 1);
//console.log(numSize(-2.456), '-->', 4);
console.log(numSize(0.0000001), '-->', 8);
console.log(numSize(1000000000000000000000), '-->', 22);
