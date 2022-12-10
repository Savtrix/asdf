window.onload = function(){
    const liCollection = document.getElementsByTagName("li");                 //kolekcja elementów z ta sama nawa tag'a 
    const redClassCollection = document.getElementsByClassName("red");        //kolekcja elementów z tą sama klasą
    const sameNameCollection = document.getElementsByName("title");           //kolekcja elementów z tym samym atrybutem 'name'
    console.log(liCollection)
    //metody getElementByXXX zwracają kolekcję a nie listę!!
    console.log(liCollection.length);                                         //mozna pobrac liczbę elementów              
    console.log(liCollection[0]);                                             //można odwołać się do danego elementu
    try{
        liCollection.push();                                                  //nie można dodać do kolekcji
    }catch(e){
        console.log("Nie zmieniać do kolekcji zwracanych przez getElementByXXX!!!");
    }
    //Na podstawie kolekcji można utworzyć tablicę, która można swobodnie mutować
    const liArray = Array.from(liCollection);
    liArray.push("li");
    console.log(liArray);
    //Metoda querySelector zwraca jeden element. Gdy wiele elementów pasuje do selektora to zwracany jest pierwszy pasujący.
    //Selektory mają taką sama postać jak w plikach css.  
    //Metody querySelectorX najlepiej sprawdzają się, gdy wyszukujemy specyficzny element na podstawie wielu cech
    const h1Element = document.querySelector("h1");                             //pierwszy element pasujący do selektora, w tym przypadku do taga h1
    const liElementWithRedClass = document.querySelector("ul li.red");          //pierwszy element li klasy 'red', który jest dzieckiem elementu ol         
    console.log("Element li with red class %o", liElementWithRedClass);         //
    //Metoda querySelectorAll zwraca listę węzłow pasujących do selektora
    const liElements = document.querySelectorAll("ul li");                      
    console.log(liElements);
}