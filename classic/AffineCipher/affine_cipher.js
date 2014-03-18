var mod = require('../../utils/modular_arithmetics.js'),
    sub = require('../substitution_cipher.js');

var a = 1,
    b = 1,
    m = sub.alphabet.rus.magnitude,
    letters = sub.alphabet.rus.letters;

var origin,
    debug = false,
    mode = 0;

const MODE_LETTER = 1;
const MODE_DIGIT = 0;

mod.setM(m);

// * - mod *; + - mod +;
// ek(x) = a * x + b;
// dk(y) = a^-1 (y - b);
// a^-1: a * a^-1 = 1;
var ek = function (x) {
    x = parseInt(x);
    var res = mod.add(mod.multi(a, x), b);
    if (res < 0) {
        res = mod.negative(res);
    }
    return res;
};
var dk = function (y) {
    y = parseInt(y);
    var res =  mod.multi(mod.obrat(a), mod.add(y, -b));
    return res < 0 ? mod.negative(res) : res;
};

sub.setEK(ek);
sub.setDK(dk);
sub.chooseLetters('rus');

var toArray = function (txt) {
    return !txt.join ? txt.split('') : txt;
};
var process = function (txt, f) {
    txt = toArray(txt || origin);
    log('Original: ', txt.join(''));
    if (mode == MODE_LETTER) {
        txt = sub.convertToDigits(txt);
    }
    var txt2 = sub[f](txt);
    if (mode == MODE_LETTER) {
        txt2 = sub.convertToLetters(txt2);
    }
    log('Processd: ', txt2.join(''));
    return txt2;
};
var encode = function (txt) {
    log('*** Affine cipher: encoding ... ***');
    return process(txt, 'encode');
};
var decode = function (txt) {
    log('*** Affine cipher: decoding ... ***');
    return process(txt, 'decode');
};
var log = function () {
    if (debug)
        console.log.apply(this, arguments);
};

module.exports = {
    origin: function (o) { origin = o;},
    debug: function (o) { debug = o;},
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
    decode: decode,
    mode: function (m) { mode =  m == sub.MODE_LETTER ? sub.MODE_LETTER : sub.MODE_DIGIT; },
    MODE_LETTER: sub.MODE_LETTER,
    MODE_DIGIT: sub.MODE_DIGIT,
    printParams: function () {
        var s = 'M(agnitude) = ' + m + ', ek(x) = ' + a + 'x + ' + b + ', dk(y) = ' + mod.obrat(a) + ' (y - ' + b + ')';
        log('*** Affine cipher: parameters:');
        log(s);
        return s;
    }
};

