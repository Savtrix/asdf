/**
 * Modyfikacja dokumentów HTML poprzez DOM - Document Object Model
 */

window.onload = function(){                                 //kod niezbedny, aby skrypt się wykonał po załadowaniu dokumentu 
    const head1 = document.getElementById("head1");         //pobranie elementu na podstawie id
    head1.innerHTML = "Lista osób";                         //każdy element ma właściwości innerText i innerHtml
    head1.classList.add("coloredHead");                     //każdy element ma listę klas
    const peopleList = document.querySelector("#people");   //zwraca pierwszy pasujący do selektora element, równoważnik polecenie z wiersza 6
    const people = ["Adam", "Ewa", "Bogdan", "Karol"];      
    people
    .map(name => {
        const item = document.createElement('li');          //tworzenie noego elementu 
        item.innerHTML = `<span> ${name} </span>`;          //wstawienie kodu HTMl jako zawartości elementu
        console.log(item.innerText);                        //jaka jest wartość innerText naszego elementu? To innerText elementu potomnego, czyli <span>
        return item;
    })
    .forEach(item => peopleList.appendChild(item));         //dołączanie do rodzica utworzonych węzłów
};