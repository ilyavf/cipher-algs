Cryptography algorithms
===================

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
**Table of Contents**

- [Different ciphers](#different-ciphers)
	- [Simple XOR](#simple-xor)
		- [Test XOR](#test-xor)
		- [How to break XOR](#how-to-break-xor)
	- [Affine Cipher](#affine-cipher)
	- [Vigenere Cipher](#vigenere-cipher)
	- [Hill Cipher](#hill-cipher)
- [Terminology](#terminology)
- [Links](#links)
	- [Internet](#internet)
	- [Printed sources](#printed-sources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Different ciphers

## Simple XOR

### Test XOR

This is a symmetric algorithm. The plaintext is being XORed with a keyword to generate the ciphertext. Since XORing the same value twice restores the original, encryption and decryption use exactly the same program:

```sh
$ gcc xor.c -o xor.o
$ ./xor.o 1001001001 input.txt output.txt
$ ./xor.o 1001001001 output.txt reoutput.txt
$ cat input.txt && echo "\n" && cat output.txt && echo "\n" && cat reoutput.txt
Hello, world!
yU\]_G_C]T
Hello, world!
```

### How to break XOR

Assume the plaintext is English. Furthermore, assume the key length is any small number of bytes. Here’s how to break it:

1. Discover the length of the key by a procedure known as counting coincidences.
XOR the ciphertext against itself shifted various numbers of bytes, and count those bytes that are equal.
If the displacement is a multiple of the key length, then something over 6 percent of the bytes will be equal.
If it is not, then less than 0.4 percent will be equal (assuming a random key encrypting normal ASCII text;
other plaintext will have different numbers). This is called the index of coincidence.
The smallest displacement that indicates a multiple of the key length is the length of the key.

2. Shift the ciphertext by that length and XOR it with itself.
This removes the key and leaves you with plaintext XORed with the plaintext shifted the length of the key.
Since English has 1.3 bits of real information per byte, there is plenty of redundancy for determining a unique decryption.

## Affine Cipher

This is a monoalphabetic substitution cipher.
```
ek(x) = ax + b, x belongs to Zm
dk(y) = a^-1 ( y - b ), y belongs to Zm
```
Implemented in ./src/classic/AffineCipher. To test execute the following with NodeJS:
```cmd
$ node ./src/classic/AffineCipher/affine_run.js

*** Affine cipher: parameters:
M(agnitude) = 33, ek(x) = 7x + 3, dk(y) = 19 (y - 3)
*** Affine cipher: encoding ... ***
Original: аффинныйшифрявляетсячастнымслучаемшифраподстановки
Processd: гссаввбжмасцьрфьедэьёгэдвбыэфкёгеымасцгпиюэдгвирна
*** Affine cipher: decoding ... ***
Original: гссаввбжмасцьрфьедэьёгэдвбыэфкёгеымасцгпиюэдгвирна
Processd: аффинныйшифрявляетсячастнымслучаемшифраподстановки
```

Number of keys is found as: m * eilerF(m). For Russian alphabet number of keys in Affine cipher is 33*eilerF(33),
where eilerF returns amount of co-prime numbers with m=33. To test run:
```cmd
$ node
> var misc = require('./utils/misc.js');
> 33 * misc.eilerF(33)
660
```

## Vigenere Cipher

Polyalphabetic cipher.

```cmd
node src/classic/VigenereCipher/vigenere_run.js
*** Vigenere Cipher ***
M(agnitude) = 33, key phrase: "скрыть", number of keys of the same length = m^l : 1291467969
Origin: шифрвиженератакженеявляетсянадежным
Cryptd: йуелфешпюагьдкывчйцйтжсбдьпитацсюця
Decryp: шифрвиженератакженеявляетсянадежным
```

## Hill Cipher

Polyalphabetic cipher. Square invertible matrix is a key: |k| * |k^-1| = 1

P = C = K = (Zm)^n

Let m = 33, n = 3. K - set of all invertible matrixes.

```
Original: шифрование
k:  /  1  3 17  \
   |  10  6  3   |
    \  2  4  5  /

Divide original string into groups of three. Then:
шиф = (25 9 21)
ров = (17 15 2)
...

All operations are modulo-33.

              /  1  3 17  \
(25 9 21) *  |  10  6  3   | = (25 15 29) => ШОЬ
              \  2  4  5  /

              /  1  3 17  \
(17 15 2) *  |  10  6  3   | = ( 6 17 14) => ЁРН
              \  2  4  5  /
...
```


(sorry, no implementation)


# Terminology

(http://en.wikipedia.org/wiki/Cipher)
- Classic ciphers
  - Substitution
    - Monoalphabetic (Affine)
    - Polyalphabetic (Vigenère, Hill)
  - Transposition
- Rotor Machines
- Modern ciphers:
  - Private Key
    - Stream
    - Block
  - Public Key

# Links

## Internet

- http://forums.devshed.com/security-and-cryptography-17/simple-xor-theory-662613.html
- http://practicalcryptography.com
- http://practicalcryptography.com/cryptanalysis/text-characterisation/index-coincidence/

## Printed sources

- 577. W.F. Friedman, The Index of Coincidence and Its Applications in Cryptography, Riverbank Publication No. 22,
Riverbank Labs, 1920. Reprinted by Aegean Park Press, 1987.
  - downloaded from: http://faculty.ksu.edu.sa/2170/Other%20Papers/the_index_of_coincidence_and_its_application_in_cryptonalysis.pdf
  - http://faculty.ksu.edu.sa/2170/Other%20Papers/Forms/AllItems.aspx
- Пилиди В.С. Криптография. Вводные главы: Учебное пособие. 2009. Учебное пособие состоит из трех глав. В первой главе
рассматриваются некоторые классические криптосистемы. Кроме того, в этой главе приводятся необходимые сведения из курсов
общей алгебры и теории чисел. Вторая глава посвящена криптоанализу классических шифров. В третьей главе излагаются
некоторые вопросы теории Шеннона. Рассматривается вопрос об абсолютной стойкости шифра, вводится понятие энтропии.
В качестве приложений изложенных результатов рассматриваются следующие вопросы: кодирование по методу Хаффмена,
расстояние единственности для криптосистемы. Пособие предназначено для студентов, изучающих курс криптографии.
	- downloaded from: http://window.edu.ru/resource/816/68816
	- found in: http://ru.wikipedia.org/wiki/%D0%98%D0%BD%D0%B4%D0%B5%D0%BA%D1%81_%D1%81%D0%BE%D0%B2%D0%BF%D0%B0%D0%B4%D0%B5%D0%BD%D0%B8%D0%B9
- Малашонок Г. И., Решение системы линейных уравнений в целостном кольце. Ж. вычисл. матем. и матем. физ., 1983, том 23, номер 6, страницы 1497–1500
  - downloaded from: http://www.mathnet.ru/php/archive.phtml?wshow=paper&jrnid=zvmmf&paperid=4484&option_lang=rus

