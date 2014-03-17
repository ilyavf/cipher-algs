var mod = require('../../utils/modular_arithmetics.js');

var a = 1;
var b = 1;
var m = 33; // Russian alphabet
//var m = 26; // English alphabet

mod.setM(m);

// * - mod *; + - mod +;
// ek(x) = a * x + b;
// dk(y) = a^-1 (y - b);
// a^-1: a * a^-1 = 1;
var ek = function (x) {
    return mod.add(mod.multi(a, x), b);
};
var dk = function (y) {
    return mod.multi(mod.obrat(a), mod.add(y, -b));
};

var encode = function (txt) {

};
var decode = function (txt2) {

};


module.exports = {
    setAB: function (newA, newB) {
        a = newA;
        b = newB;
    },
    setM: function (newM) {
        m = newM;
        mod.setM(m);
    },
    ek: ek,
    dk: dk,
    encode: encode,
    decode: decode
};