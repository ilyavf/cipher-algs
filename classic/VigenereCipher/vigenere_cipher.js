var mod = require('../../utils/modular_arithmetics.js'),
    sub = require('../substitution_cipher.js');

var m = sub.alphabet.rus.magnitude,
    letters = sub.alphabet.rus.letters;

var keyPhrase = 'виженер';

mod.setM(m);

var process = function (txt, op) {
    txt = sub.convertToDigits(txt);
    var crypted = [];
    txt.forEach(function (v, i) {
        crypted.push( mod[op](v, keyPhrase[i % keyPhrase.length]) );
    });
    return sub.convertToLetters(crypted);
};
var encode = function (txt) {
    return process(txt, 'add');
};
var decode = function (txt) {
    return process(txt, 'sub');
};

module.exports = {
    setKey: function (key) {
        keyPhrase = sub.convertToDigits(key);
    },
    encode: encode,
    decode: decode
};