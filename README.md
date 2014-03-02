Cryptography algorithms
===================

## Simple XOR

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

### How to break

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

## Links
- http://forums.devshed.com/security-and-cryptography-17/simple-xor-theory-662613.html
- http://practicalcryptography.com
- http://practicalcryptography.com/cryptanalysis/text-characterisation/index-coincidence/

## Printed sources
- 577. W.F. Friedman, The Index of Coincidence and Its Applications in Cryptography, Riverbank Publication No. 22,
Riverbank Labs, 1920. Reprinted by Aegean Park Press, 1987.
-- downloaded from: http://faculty.ksu.edu.sa/2170/Other%20Papers/the_index_of_coincidence_and_its_application_in_cryptonalysis.pdf
-- http://faculty.ksu.edu.sa/2170/Other%20Papers/Forms/AllItems.aspx
- Пилиди В.С. Криптография. Вводные главы: Учебное пособие. 2009. Учебное пособие состоит из трех глав. В первой главе
рассматриваются некоторые классические криптосистемы. Кроме того, в этой главе приводятся необходимые сведения из курсов
общей алгебры и теории чисел. Вторая глава посвящена криптоанализу классических шифров. В третьей главе излагаются
некоторые вопросы теории Шеннона. Рассматривается вопрос об абсолютной стойкости шифра, вводится понятие энтропии.
В качестве приложений изложенных результатов рассматриваются следующие вопросы: кодирование по методу Хаффмена,
расстояние единственности для криптосистемы. Пособие предназначено для студентов, изучающих курс криптографии.
-- http://window.edu.ru/resource/816/68816

