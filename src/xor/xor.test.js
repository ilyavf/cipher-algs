var assert = require('assert'),
    xor = require('./xor');

console.log('Testing XOR...');

var s1 = 'abcdefgh',
    s2 = 'xyz';
assert.equal(
    xor.xorString(s1, s2),
    String.fromCharCode('a'.charCodeAt(0) ^ 'x'.charCodeAt(0)) +
    String.fromCharCode('b'.charCodeAt(0) ^ 'y'.charCodeAt(0)) +
    String.fromCharCode('c'.charCodeAt(0) ^ 'z'.charCodeAt(0)) +
    String.fromCharCode('d'.charCodeAt(0) ^ 'x'.charCodeAt(0)) +
    String.fromCharCode('e'.charCodeAt(0) ^ 'y'.charCodeAt(0)) +
    String.fromCharCode('f'.charCodeAt(0) ^ 'z'.charCodeAt(0)) +
    String.fromCharCode('g'.charCodeAt(0) ^ 'x'.charCodeAt(0)) +
    String.fromCharCode('h'.charCodeAt(0) ^ 'y'.charCodeAt(0))
    , 'abcdefgh ^ xyz = ...');
assert.equal(xor.xorString(xor.xorString(s1, s2), s2), s1, 'Double xor should return original string');
assert.equal(xor.xorChar('a', 'b').charCodeAt(0), 3, '"a" XOR "b" should give 3');
assert.deepEqual(xor.charMap('abc'), [97,98,99], 'Char map of "abc" should be [97,98,99]');
assert.equal(xor.rotateString('hello', 3), 'lohel', '"hello" rotated by 3 should be "lohel"');
assert.equal(xor.countCoincidences('hello', 'bilbo'), 2, 'indexOfCoincidence of "hello" and "bilbo" should be 2');

console.log('All tests passed. OK!');

//console.log('map1: ' + xor.charMap(s1));
//console.log('map2: ' + xor.charMap(xor.xorString(s1, s2)));
//console.log('map3: ' + xor.charMap(xor.xorString(xor.xorString(s1, s2), s2)));
//
//console.log('a ^ x = ' + ('a'.charCodeAt(0) ^ 'x'.charCodeAt(0)))
//console.log('c ^ z = ' + ('c'.charCodeAt(0) ^ 'z'.charCodeAt(0)))

console.log('indexOfCoincidence: ' + xor.indexOfCoincidence('hello', 'bilbo'));
console.log('rotateString: helloworld');
console.log('rotateString: ' + xor.rotateString('helloworld', 4));

var orig = 'isthereanybodygoingtolistentomystoryallaboutthegirlwhocametostay',
    key = 'hello',
    crypted = xor.xorString(orig, key);

console.log('check: ' + xor.xorString(orig, crypted));

console.log('map: ' + xor.charMap(orig));
console.log('done1: ' + xor.indexOfCoincidence(crypted, xor.xorString(crypted, xor.rotateString(crypted, 1))));
console.log('done2: ' + xor.indexOfCoincidence(crypted, xor.xorString(crypted, xor.rotateString(crypted, 2))));
console.log('done3: ' + xor.indexOfCoincidence(crypted, xor.xorString(crypted, xor.rotateString(crypted, 3))));
console.log('done4: ' + xor.indexOfCoincidence(crypted, xor.xorString(crypted, xor.rotateString(crypted, 4))));
console.log('done5: ' + xor.indexOfCoincidence(crypted, xor.xorString(crypted, xor.rotateString(crypted, 5))));



//console.log('crypted: ' + xor.charMap(crypted));
//console.log('crypted: ' + crypted);
//var rotated = xor.rotateString(crypted, 8);
//console.log('rotated: ' + rotated);
//console.log('coincidences: ' + xor.indexOfCoincidence(crypted, rotated));

/*console.log('rotate01: ' + xor.indexOfCoincidence(crypted, xor.xorString(crypted, xor.rotateString(crypted, 1))));
console.log('rotate02: ' + xor.indexOfCoincidence(crypted, xor.xorString(crypted, xor.rotateString(crypted, 2))));
console.log('rotate03: ' + xor.indexOfCoincidence(crypted, xor.xorString(crypted, xor.rotateString(crypted, 3))));
console.log('rotate04: ' + xor.indexOfCoincidence(crypted, xor.xorString(crypted, xor.rotateString(crypted, 4))));
console.log('rotate05: ' + xor.indexOfCoincidence(crypted, xor.xorString(crypted, xor.rotateString(crypted, 5))));
console.log('rotate06: ' + xor.indexOfCoincidence(crypted, xor.xorString(crypted, xor.rotateString(crypted, 6))));
console.log('rotate07: ' + xor.indexOfCoincidence(crypted, xor.xorString(crypted, xor.rotateString(crypted, 7))));
console.log('rotate08: ' + xor.indexOfCoincidence(crypted, xor.xorString(crypted, xor.rotateString(crypted, 8))));
console.log('rotate09: ' + xor.indexOfCoincidence(crypted, xor.xorString(crypted, xor.rotateString(crypted, 9))));
console.log('rotate10: ' + xor.indexOfCoincidence(crypted, xor.xorString(crypted, xor.rotateString(crypted, 10))));
console.log('rotate11: ' + xor.indexOfCoincidence(crypted, xor.xorString(crypted, xor.rotateString(crypted, 11))));
console.log('rotate12: ' + xor.indexOfCoincidence(crypted, xor.xorString(crypted, xor.rotateString(crypted, 12))));
console.log('rotate13: ' + xor.indexOfCoincidence(crypted, xor.xorString(crypted, xor.rotateString(crypted, 13))));
console.log('rotate14: ' + xor.indexOfCoincidence(crypted, xor.xorString(crypted, xor.rotateString(crypted, 14))));*/
