var ek = function (x) { return x ;};
var dk = function (y) { return y ;};

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

module.exports = {
    setEK: function (f) {
        ek = f;
    },
    setDK: function (f) {
        dk = f;
    },
    encode: encode,
    decode: decode
};