var mod = require('../../utils/modular_arithmetics.js'),
    sub = require('../substitution_cipher.js');

var m = sub.alphabet.rus.magnitude;

var keyPhrase = 'виженер',
    key = sub.convertToDigits(keyPhrase);

mod.setM(m);
sub.chooseLetters('rus');

var process = function (txt, op) {
    txt = sub.convertToDigits(txt);
    var crypted = [];
    txt.forEach(function (v, i) {
        crypted.push( mod[op](v, key[i % key.length]) );
    });
    return sub.convertToLetters(crypted);
};
var encode = function (txt) {
    return process(txt, 'add');
};
var decode = function (txt) {
    return process(txt, 'sub');
};
var amountOfKeys = function () {
    return Math.pow(m, keyPhrase.length);
};

module.exports = {
    setKey: function (txt) {
        keyPhrase = txt;
        key = sub.convertToDigits(txt);
    },
    encode: encode,
    decode: decode,
    amountOfKeys: amountOfKeys,
    printParams: function () {
        var s = 'M(agnitude) = ' + m + ', key phrase: "' + keyPhrase + '", number of keys of the same length = m^l : ' + amountOfKeys();
        return s;
    }
};