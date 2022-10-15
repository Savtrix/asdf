/**
 * Napisz skrypt, który generuje losowy łańcuch o długości z zmiennej length składający się ze znaków alfabetu a-z i cyfr.
 * Wygenerowany Łańcuch umieść w zmiennej randomString  
 */

let length = 20;
let randomString = '';

randomString = Math.random().toString(36).substr(2, length)

console.log(randomString);