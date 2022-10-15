/**
 * Napisz skrypt, który na podstawie dwóch liczb `n` < `m` tworzy łańcuch w zmiennej progressBar dwa wiersze:
 * pasek: określający, ile procent stanowi liczba `n` w stosunku do `m`, długość paska wynosi od 0 do 50 znaków `#` plus uzupełnienie do 50
 * znaków spacjami. Na początku i końcu znaki `|`. 
 * opis: w wierszu poniżej `0%` na początku, `100%` na końcu i wartość paska w procentach po środku.
 * Przykład
 * Dla `n` = 36,6 i `m` = 50
 * skrypt powinien utworzyć w prograssBar łańcuch jak poniżej:
 * |################################                  |
 * 0 %                      75%                    100%
 */
let n = 140;
let m = 240;
let progressBar = "";
let bar = [];
bar[0] = '|';
bar[49] ='|';

let k = Math.round((n/m)*100);
if(k>98) k=98;
for(let i =1; i <k/2;i++)
    bar[i] ='#'

for(let f = k/2;f <49; f++)
bar[f] =" ";

for(let x=0;x<50; x++)
progressBar += bar[x];
progressBar +='\n';
progressBar += `0%                      ${k}%                     100%`;
console.log(progressBar)