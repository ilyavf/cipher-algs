console.log('Modular arithmetics');
console.log('add :: Int a -> Int b -> Int m -> Int');
console.log('multi :: Int a -> Int b -> Int m -> Int');
console.log('negative :: Int a -> Int m -> Int');
console.log('obrat :: Int a -> Int m -> Int');
var modAdd = function (a, b, m) {
    return (a + b) % m;
};
var modMulti = function (a, b, m) {
    return (a * b) % m;
};
var modNegative = function (a,m) {
    for (var b = 0; b < m; b++) {
        if (modAdd(a, b, m) == 0) return b;
    }
};
var modObrat = function (a,m) {
    for (var b = 0; b < m; b++) {
        if (modMulti(a, b, m) == 1) return b;
    }
};
module.exports = {
    add: modAdd,
    multi: modMulti,
    negative: modNegative,
    obrat: modObrat
};