const fs = require('node:fs');
const MDE = require('../src/index');

//
//  Encrypt
//
const encrypted = MDE.Encrypt("Hello world", MDE.Keygen.random(3));



console.log('Encrypted output:' , encrypted);

// console.log(
//   'Key Matrix',
//   MDE.Keygen.ascii_to_key_matrix(encrypted.key)
// );
// 
//
//  Decrypt
//

const recovered = MDE.Decrypt(
  encrypted.data,
  encrypted.key
);

console.log('Recovered from encrypted: ', recovered);






