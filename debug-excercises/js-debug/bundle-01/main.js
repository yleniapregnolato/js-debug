/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }
// 1- è un ciclo for che stampa numeri quando sono maggiori di 5
// 2- non sono presenti errori di sintassi
// 3- l'errore logico è il ">" in quanto "i" parte da 0 mentre la condizione del ciclo è che "i" sia maggiore di 5, quindi in questi termini il ciclo non verrà mai avviato. Il codice corretto sarebbe (let i = 0; i < 5; i++)

// ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }

// 1- è una funzione che ci dice se il numero inserito è pari
// 2- sono presenti errori di sintassi in quanto scrivere "=" significa fare un'assegnazione quindi stiamo dicendo che il num % 2 è uguale a 0. Noi invece abbiamo bisgno di un operatore di confronto che sia strettamente uguale, quindi di un'indentità. il codice corretto quindi è if (num% 2 === 0)
// 3- non sono presenti errori logici


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}

// 1- è una funzione che ci da un ciclo for per stampare numeri inferiori di 5



// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]