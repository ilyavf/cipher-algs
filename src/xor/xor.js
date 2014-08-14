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

}

module.exports = {
    xorChar: xorChar,
    xorString: xorString,
    charMap: charMap
};