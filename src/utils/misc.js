var eilerF = function (m) {
    if (m == 1) return 1;

    var count = 0;
    for (var i = 1; i < m; i++) {
        if (isCoPrime(i, m)) count++;
    }
    return count;
};

var isCoPrime = function (a, b) {
    return GCD(a, b) === 1;
};

// greatest common divisor (gcd)
// algorithm Evclida:
var GCD = function (a, b) {
    if (a == 0) return b;
    if (b == 0) return a;
    return GCD(b, a % b);
};

//console.log(GCD(15, 9));
//console.log(isCoPrime(15, 7));
//console.log(eilerF(8)); // should be f(8) = 4.
// Number of keys for Affine Cipher: m * eilerF(m)
//console.log(33 * eilerF(33)); // 660

module.exports = {
    eilerF: eilerF,
    isCoPrime: isCoPrime,
    GCD: GCD
};