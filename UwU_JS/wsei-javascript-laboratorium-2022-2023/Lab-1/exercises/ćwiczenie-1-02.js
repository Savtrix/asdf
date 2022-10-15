/**
 * Napisz skrypt, który w łańcuchu triangle zawiera ciąg znaków '#' i '\n' tworzących kształ trójkąta o wysokości 
 * w zmiennej height. Po wyświetleniu na konsoli powinien zostać wyświetlony poniższy wzór liczba wierzy powinna odpowiadać 
 * zmiennej height:
 * #
 * ##
 * ###
 * ####
 * ##### 
 */
let height = 5;
let triangle = '';
let count =1;

if(height<0 ) triangle = "wrong Height!";
else
for(let i =0; i < height; i++ ){
    for(let j =0; j <count;j++)
    triangle += '#';
    triangle += "\n";
    count++


}
console.log(triangle);