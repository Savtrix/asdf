/**
 * Napisz skrypt zamieniający wartość zmiennej decimalNumber  na liczbę rzemską w zakresie od 1 do 10.
 * Wynik zapisz do zmienej romanNumber.
 * Jeśli decimalNumber nie mieści sie w zakresie to umieść w romanNumber komunikat: Decimal number is out of range!
 * Jeśli decimalNumber jest równe undefined lub null to umieść w romanNumber komunikat: Decimal number is undefined or null!
 */
let decimalNumber = 7;
let romanNumber = '';

if(decimalNumber < 1 || decimalNumber > 10)
romanNumber = 'Decimal number is out of range!'
else if(decimalNumber == null || typeof(decimalNumber) == undefined )
romanNumber = 'Decimal number is undefined or null!'
else
romanNumber += convertToRoman(decimalNumber)
console.log(romanNumber);

function convertToRoman(num){
  if(num == 0 ){return ''}
  if(num == 10){ return "X" }
  if(num == 9){ return "IX" }
  if(num >= 5){ return "V" + convertToRoman(num - 5);}
  if(num >= 4){ return "IV" }
  if(num >= 1){ return "I" + convertToRoman(num - 1);}  
}
