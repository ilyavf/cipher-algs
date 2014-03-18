const MODE_DIGIT = 0;
const MODE_LETTER = 1;
const LETTERS_RUS = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'.split('');
const LETTERS_EN = 'abcdefghijklmnopqrstuvwxyz'.split('');

var LETTERS = LETTERS_RUS,

    ek = function (x) { return x ;},
    dk = function (y) { return y ;};

var process = function (txt, f) {
    var crypted = [];
    for (var i in txt) {
        crypted.push(f(txt[i]));
    }
    return crypted;
};
var encode = function (txt) {
    return process(txt, ek);
};
var decode = function (txt) {
    return process(txt, dk);
};
var toArray = function (txt) {
    return !txt.join ? txt.split('') : txt;
};
var convertToMode = function (arr, mode, letters) {
    arr = toArray(arr);
    letters = letters || LETTERS;
    var converted =  arr.map(function (v) {
        return mode === MODE_DIGIT ? letters.indexOf(v) : letters[v];
    });
    return converted;
};
var convertToDigits = function (arr, letters) {
    return convertToMode(arr, MODE_DIGIT, letters);
};
var convertToLetters = function (arr, letters) {
    return convertToMode(arr, MODE_LETTER, letters);
};

module.exports = {
    setEK: function (f) {
        ek = f;
    },
    setDK: function (f) {
        dk = f;
    },
    encode: encode,
    decode: decode,
    chooseLetters: function (lang) {
        LETTERS = lang == 'rus' ? LETTERS_RUS : LETTERS_EN;
    },
    convertToMode: convertToMode,
    convertToDigits: convertToDigits,
    convertToLetters: convertToLetters,
    alphabet: {
        rus: {
            magnitude: LETTERS_RUS.length,
            letters: LETTERS_RUS
        },
        en: {
            magnitude: LETTERS_EN.length,
            letters: LETTERS_EN
        }
    },
    MODE_DIGIT: MODE_DIGIT,
    MODE_LETTER: MODE_LETTER
};