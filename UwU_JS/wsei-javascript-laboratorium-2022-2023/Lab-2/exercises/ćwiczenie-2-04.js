/**
 * Zdefiniuj funkcję, która zwróci najdłuższy wyraz łańcucha
 * Przykład
 * let word = longestWord("Programowanie w JavaScript jest super")
 * w word powinno być słowo "Programowanie"
 * Załóż, że w łańcuchu są słowa oddzielone tylko spacją (brak kropek, przecinków itd.)
 */

function longestWord(sentence){
    
   
    let maxword = "";
    let word = "";
    let maxlength = 0;
    let count =0 
    if(sentence==null) return word;
    for(let i =0; i<sentence.length;i++)
    if(sentence[i] ==" ")
    {
        if(count > maxlength){
            maxword= word;
            maxlength = count;
            count=0;
            word="";
        }
        
    }
    else
    {
    word += sentence[i];
    count++
    }
    return maxword;
}


//Testy
if (longestWord("Is this a fox") === "this"){
    console.log("Test 41 passed")
} else {
    console.log("Test 41 failed")
}
if (longestWord("") === ""){
    console.log("Test 42 passed")
} else {
    console.log("Test 42 failed")
}
if (longestWord() === ""){
    console.log("Test 43 passed")
} else {
    console.log("Test 43 failed")
}