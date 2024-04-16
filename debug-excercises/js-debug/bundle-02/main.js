/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();

// 1- questa funzione ci dice se abbiamo più o meno di 18
// 2- non sono presenti errori di sintassi
// 3- sono presenti errori logici in quanto si è dato un valore fisso alla costante myAge e in questo caso il risultato sarà sempre e comunque >18. sarebbe stato più corretto chiedere l'età tramite un prompt dentro un parseint: const myAGe = parseInt(prompt("quanti anni hai?"));
// l'altro errore è nella costante message, il suo valore cambia nel corso dell'esecuzione del codice quindi bisogna dichiararla con un let

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();

// 1- questa funzione stampa tutti gli indici dell'array, quindi tutti i colori presenti all'interno
// 2- c'è un errore di sintassi, lenght è scritto sbagliato, la scrittura corretta è length
// 3- non ci sono errori logici


// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

// 1- questa funzione chiede all'utente tramite prompt di inserire un numero e successivamente somma quel numero a 12. ci restituisce il risultato della somma
// 2- non ci sono errori di sintassi
// 3- ci sono errori logici in quanto il prompt andrebbe inserito dentro un parseint per poter fare successivamente la somma. senza questo, infatti, il prompt ci restituisce sempre una stringa


// // ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

// 1- la funzione scorre l'array per verificare che la mail inserita dall'utente sia presente nell'array e ci restituisce un booleano
// 2- ci sono errori di sintassi, il true e false vengono inseriti come stringhe quindi la funzione in questo modo non ci restituisce il valore booleano
// la sintassi corretta è 

// function checkAccess() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     if (addresses.includes(userEmail)) {
//        console.log("accesso consentito");
//     } else {
//         console.log("accesso negato");
//     }

// }
// console.log(checkAccess());

// // ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = 'true';

            }

        }
    }
        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
    checkAccessImproved();

// 1- la funzione chiede all'utente la sua mail tramite prompt e verifica se è all'interno dell'array. ci restituisce un booleano
// 2- ci sono errori di sintassi, il true viene inserito (come precedentemente) come stringa quindi la funzione in questo modo non ci restituisce il valore booleano
// 3- ci sono errori logici, la condizione:
// if (grantAccess) {
//     console.log('Accesso consentito!');
// } else {
//     console.log('Accesso negato!');
// }
// dovrebbe essere messa fuori da ciclo in modo da stampare il messaggio solo dopo il controllo della funzione
// funzione corretta:

// function checkAccessImproved() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     if (userEmail.length > 5) {
//         let grantAccess = false;

//         for (let i = 0; i < addresses.length; i++) {
//             const email = addresses[i];

//             if (email === userEmail) {
//                 grantAccess = true;
//                 break;
//             }
//         }


//         if (grantAccess) {
//             console.log('Accesso consentito!');
//         } else {
//             console.log('Accesso negato!');
//         }
//     } else {
//         console.log("indirizzo non valido");
//     }
    
// }
// console.log(checkAccessImproved());



























