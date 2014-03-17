var af = require('./affine_cipher.js'),
    crypted,
    decrypted;

af.setAB(7,3);
af.ek(4);
af.debug(1);

//crypted = af.encode('0123456');
//decrypted = af.decode(crypted);

af.mode('letter');
//crypted = af.encode('аффинныйшифрявляетсячастнымслучаемшифраподстановки');
crypted = af.encode('аффинныйшифр');
decrypted = af.decode(crypted);