window.onload = function(){
    const head1 = document.getElementById("head1");         //pobranie elementu na podstawie id
    head1.innerHTML = "Lista osób";                         //każdy element ma właściwości innerText i innerHtml
    head1.classList.add("coloredHead");                     //każdy element ma listę klas
    const peopleList = document.querySelector("#people");   //zwraca pierwszy pasujący do selektora element, równoważnik polecenie z wiersza 6
    const people = ["Adam", "Ewa", "Bogdan", "Karol"];
    clearList(peopleList);
    createList(peopleList, people);
    removeItemFromList(peopleList, "Bogdan");
}
/**
 * Przykład funkcji tworzącej elementy.
 * Każdy element jest dołączany do wspólnego rodzica.
 */
function createList(parent, items){
    items
        .map(item => {
            const node = document.createElement('li');          //tworzenie noego elementu 
            node.innerHTML = `<span> ${item} </span>`;          //wstawienie kodu HTMl jako zawartości elementu
            return node;
        })
        .forEach(item => parent.appendChild(item));              //dołączanie nowego elementu do rodzica
}

function removeItemFromList(parent, itemToRemove){
    Array.from(parent.children)
    .filter(child => child.innerText === itemToRemove)
    .forEach(item => parent.removeChild(item));
}

function clearList(parent){
    parent.innerHTML = "";
}


