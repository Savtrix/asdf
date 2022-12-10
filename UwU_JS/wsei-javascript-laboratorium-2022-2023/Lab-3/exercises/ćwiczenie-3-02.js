/**
 * Zdefiniuj funkcję, która generuje kolejne liczby parzyste większę lub równe `n` i mniejsze lub równe `m`.
 */

function *evenNumbers(n, m){
    if(n%2 ==1) n+=1;
    while(true){

        if (n>m) break;
        yield n;
        
        n += 2;
        
    }
}

let sum = 0;
for(let item of evenNumbers(1, 9)){
    sum += item;
}
if (sum === 2 + 4 + 6 + 8){
    console.log("Test 21 passed.");
} else {
    console.log("Test 21 failed."+ sum);
}
let gen = evenNumbers(1, 5)
if (gen.next().value == 2 && gen.next().value == 4 && gen.next().done) {
    console.log("Test 22 passed.");
} else {
    console.log("Test 22 failed.");
}