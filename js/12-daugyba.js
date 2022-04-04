function daugyba(a, b) {
    // jei nera skaicius -> ERROR
    if (typeof a !== 'number') {
        return 'ERROR: pirmas parametras turi buti skaicius';
    }
    if (isNaN(a)) {
        return 'ERROR: pirmas parametras turi buti tikras skaicius';
    }
    //if ('' + b == 'NaN') {
        //return 'ERROR: antras parametras turi buti skaicius';
   // }
    if (typeof b !== 'number') {
        return 'ERROR: antras parametras turi buti skaicius';
    }
}

console.log(daugyba(4,5));
console.log(daugyba(-4,5));
console.log(daugyba(-4,-5));
console.log(daugyba(4,-5));
console.log('ERROR', '-->', daugyba(4,'labas'));
console.log('ERROR', '-->', daugyba('labas',5));
