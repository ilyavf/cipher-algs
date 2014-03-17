//console.log('Modular arithmetics');
//console.log('add :: Int a -> Int b -> Int m -> Int');
//console.log('multi :: Int a -> Int b -> Int m -> Int');
//console.log('negative :: Int a -> Int m -> Int');
//console.log('obrat :: Int a -> Int m -> Int');
var M;
var debug = false;
var modAdd = function (a, b, m) {
    m = m || M;
    var res = (a + b) % m;
    log('[modAdd]: ' + a + ', ' + b + ', ' + m + ' => ' + res);
    return res;
};
var modMulti = function (a, b, m) {
    m = m || M;
    var res = (a * b) % m;
    log('[modMulti]: ' + a + ', ' + b + ', ' + m + ' => ' + res);
    return res;
};
var modNegative = function (a,m) {
    m = m || M;
    a = Math.abs(a);
    for (var b = 0; b < m; b++) {
        if (modAdd(a, b, m) == 0) {
            log('[modNegative]: ' + a + ', ' + m + ' => ' + b);
            return b;
        }
    }
};
var modObrat = function (a,m) {
    m = m || M;
    for (var b = 0; b < m; b++) {
        if (modMulti(a, b, m) == 1) {
            if (debug) console.log('[modObrat]: ' + a + ', ' + m + ' => ' + b);
            return b;
        }
    }
};
var log = function () {
    if (debug)
        console.log.apply(this, arguments);
};
module.exports = {
    setM: function (i) { M = i; },
    add: modAdd,
    multi: modMulti,
    negative: modNegative,
    obrat: modObrat,
    debug: function (d) { debug = !!d;}
};