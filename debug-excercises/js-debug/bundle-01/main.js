/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}
// 1- è un ciclo for che stampa numeri quando sono maggiori di 5
// 2- non sono presenti errori di sintassi
// 3- l'errore logico è il ">" in quanto "i" parte da 0 mentre la condizione del ciclo è che "i" sia maggiore di 5, quindi in questi termini il ciclo non verrà mai avviato. Il codice corretto sarebbe (let i = 0; i < 5; i++)

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}

// 1- è una funzione che ci dice se il numero inserito è pari, in quel caso verrà sommato a 5 e ci restituirà il risultato
// 2- sono presenti errori di sintassi in quanto scrivere "=" significa fare un'assegnazione quindi stiamo dicendo che il num % 2 è uguale a 0. Noi invece abbiamo bisgno di un operatore di confronto che sia strettamente uguale, quindi di un'indentità. il codice corretto quindi è if (num% 2 === 0)
// 3- non sono presenti errori logici


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}

// 1- è una funzione che ci da un ciclo for per stampare numeri inferiori di 5
// 2- sì sono presenti errori di sintassi in quanto per separare le istruzioni del ciclo non si utilizza la virgole "," . Per fare questa separazione ci occore il punto e virgola ";". il codice corretto è quindi for (let i = 0; i < 5; i++)
// non ci sono errori di logica



// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

// 1- questa funzione scorre l'array number e tramite un ciclo for con condizione, se il ciclo trova un numero pari all'interno dell'array lo pusha su una nuova array di una variabile dichiarata precedentemente
// 2- sì sono presenti errori di sintassi 
// for (let i = 0; i < numbers.length; i++) devo togliere il ";" finale perchè ho già le parentesi che delimitano la fine della mia istruzione, devo togliere anche -1 o non leggerebbe tutta l'array
//  if (numbers [i] % 2 === 0); qui non era specificato che ciò che andavamo a prendere nella condizione era l'indice all'interno di numbers, inoltre nella funzione sbagliata c'è l'assegnazione mentre è corretto mettere l'uguaglianza stretta per dire che deve avere resto di zero.
// evenNumbers.push(numbers [i]); qui bisognava specificare che l'indice era riferito all'array numbers altrimenti non saprebbe da dove prelevarlo
// return evenNumbers; deve essere posizionato fuori dal ciclo la dentro la funzione
