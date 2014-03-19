var vi = require('./vigenere_cipher.js'),
    crypted,
    decrypted,
    origin = 'шифрвиженератакженеявляетсянадежным',
    keyPhrase = 'скрыть';

vi.setKey(keyPhrase);
crypted = vi.encode(origin);
decrypted = vi.decode(crypted);

console.log('*** Vigenere Cipher ***');
console.log('Key: ' + keyPhrase);
console.log('Origin: ' + origin);
console.log('Cryptd: ' + crypted.join(''));
console.log('Decryp: ' + decrypted.join(''));