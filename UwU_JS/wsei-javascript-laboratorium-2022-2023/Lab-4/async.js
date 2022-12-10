/**
 *  Promise (obietnica) to obiekt, który w sytuacji spełnienia obietnicy (np. pobrania danych z serwera)
 *  wywoluje callback metody  `then`. Argumentem funkcji callback jest obiekt z danymi obietnicy. 
 *  W sytuacji, gdy obietnica nie jest pozytywnie rozwiązana (awaria serwera, brak żądanych danych),
 *  metoda `catch` wywołuje swój callback, którego argumentem jest obiekt błędu. 
 */

const randomAction = new Promise((resolve, reject) => {
    const time = Math.random() * 1000; 
    setTimeout(() => {
        if (Math.random() < 0.5) {
            resolve(`Data loaded after ${time.toFixed(0)} ms`);
        } else {
            reject("No data!")    
        }
    }, time);
});

// randomAction
//     .then(value => {
//         console.log(value);                     //funkcja sukcesu, obietnica spełniona
//     })
//     .catch(error => {
//         console.log(error);                     //funkcja obsługi błędu, obietnica nie spełniona
//     });
// console.log("After promise");

/**
 * Słowa kluczowe async i await upraszczają wywoływanie funkcji asynchronicznych.
 * Słowo async przed funkcją oznacza, że funkcja zwraca Promise.
 * Słowo await oznacza czekanie na wykonanie funkcji asynchronicznej, czyli tworzy kod synchroniczny.
 * Słowo await może wystąpić tylko w funkcji asynchronicznej. 
 */

const delay = function(time){
    return new Promise(resolve => setTimeout(resolve, time));
}

async function delayedAction(time, action){
    console.log("Before await");
    try{
        await delay(time);
        return action();
    }catch{
        throw "Failed"; 
    }
}
console.log("Before asynchronic call");
delayedAction(1000, () => {throw 100})
.catch(error => console.log("Error"));
console.log("After asynchronic call");
delayedAction(1000, () => 10)
.then(value => console.log("Resolved with " + value))
.catch(error => console.log("Faild with " + error))