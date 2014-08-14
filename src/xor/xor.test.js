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

assert.deepEqual(xor.charMap('abc'), [97,98,99], 'Char map of "abc" should be [97,98,99]')

console.log('All tests passed. OK!');

//console.log('map1: ' + xor.charMap(s1));
//console.log('map2: ' + xor.charMap(xor.xorString(s1, s2)));
//console.log('map3: ' + xor.charMap(xor.xorString(xor.xorString(s1, s2), s2)));
//
//console.log('a ^ x = ' + ('a'.charCodeAt(0) ^ 'x'.charCodeAt(0)))
//console.log('c ^ z = ' + ('c'.charCodeAt(0) ^ 'z'.charCodeAt(0)))