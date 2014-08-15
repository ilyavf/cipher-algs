// xorChar :: char -> char -> char
var xorChar = function (char1, char2) {
    return String.fromCharCode(char1.charCodeAt(0) ^ char2.charCodeAt(0));
};

// xorString :: string -> string -> string
var xorString = function (s1, key) {
    var xored = '', i;
    for (i in s1) {
        xored += xorChar(s1[i], key[i % key.length]);
    }
    return xored;
};

// charMap :: string -> array of charcodes
var charMap = function (s) {
    var codes = [], i;
    for (i in s) {
        codes.push(s[i].charCodeAt(0));
    }
    return codes;
};

// breakXor :: string -> [string, key]
var breakXor = function (xored) {

};

var rotateString = function (s, n) {
    n = n || 1;
    return s.slice(n) + s.slice(0,n);
};

// :: string -> number
var countCoincidences = function (s1, s2) {
    var count = 0;
    for (var i in s1) {
        if (s1[i] === s2[i]) count++;
    }
    return count;
};

module.exports = {
    xorChar: xorChar,
    xorString: xorString,
    charMap: charMap,
    rotateString: rotateString,
    countCoincidences: countCoincidences,
    indexOfCoincidence: countCoincidences
};