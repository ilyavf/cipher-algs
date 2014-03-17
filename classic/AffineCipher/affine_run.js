var af = require('./affine_cipher.js'),
    crypted,
    decrypted;

af.setAB(7,3);
af.debug(1);

af.mode(af.MODE_LETTER);
af.printParams();
crypted = af.encode('аффинныйшифрявляетсячастнымслучаемшифраподстановки');
decrypted = af.decode(crypted);
